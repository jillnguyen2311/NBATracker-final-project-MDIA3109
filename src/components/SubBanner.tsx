import Spline from '@splinetool/react-spline';
export default function SubBanner() {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center mb-24">
        <h2 className="text-3xl font-bold mb-4">Discover More with OddBall</h2>
        <p className="text-lg mb-8">Unlock exclusive insights and enhance your NBA sports betting experience.</p>
      </div>

      <div>
      <Spline scene="https://prod.spline.design/ZlskqTotjg4S5GRc/scene.splinecode" />
      </div>
    </section>
  );
}