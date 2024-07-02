import React, {
  useRef,
  useCallback,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  GLTFAnimationPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
  const canvasRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const isTablet =
    (window.innerWidth >= 768 && window.innerWidth <= 1024) ||
    /ipad|android(?!.*mobile)|tablet|playbook|silk/i.test(navigator.userAgent);

  const memoizedScrollAnimation = useCallback(
    (position, target, onUpdate, viewer, isTablet) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, onUpdate, viewer, isTablet);
      }
    },
    []
  );

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const assetManager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(GLTFAnimationPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    const model = await assetManager.addFromPath("scene.glb");
    console.log("Model loaded: ", model);

    if (!model) {
      console.error("Model not loaded.");
      return;
    }

    const gltfAnims = viewer.getPlugin(GLTFAnimationPlugin);

    const resetOnEnd = true;
    await gltfAnims.playClip("Take 001", resetOnEnd);

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    let needsUpdate = true;
    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memoizedScrollAnimation(position, target, onUpdate, viewer, isTablet);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  if (isMobile) {
    return (
      <div>
        Sorry, 3D model is not available on mobile devices.
      </div>
    );
  }

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;
