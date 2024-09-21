// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrbitalContactProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}
  */
  readonly autoTracking: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}
  */
  readonly eventHubUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}
  */
  readonly minimumElevationDegrees?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}
  */
  readonly minimumVariableContactDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}
  */
  readonly networkConfigurationSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#links OrbitalContactProfile#links}
  */
  readonly links: OrbitalContactProfileLinks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#timeouts OrbitalContactProfile#timeouts}
  */
  readonly timeouts?: OrbitalContactProfileTimeouts;
}
export interface OrbitalContactProfileLinksChannelsEndPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}
  */
  readonly endPointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}
  */
  readonly protocol: string;
}

export function orbitalContactProfileLinksChannelsEndPointToTerraform(struct?: OrbitalContactProfileLinksChannelsEndPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_point_name: cdktf.stringToTerraform(struct!.endPointName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function orbitalContactProfileLinksChannelsEndPointToHclTerraform(struct?: OrbitalContactProfileLinksChannelsEndPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_point_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalContactProfileLinksChannelsEndPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrbitalContactProfileLinksChannelsEndPoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointName = this._endPointName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalContactProfileLinksChannelsEndPoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPointName = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPointName = value.endPointName;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_point_name - computed: false, optional: false, required: true
  private _endPointName?: string; 
  public get endPointName() {
    return this.getStringAttribute('end_point_name');
  }
  public set endPointName(value: string) {
    this._endPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointNameInput() {
    return this._endPointName;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class OrbitalContactProfileLinksChannelsEndPointList extends cdktf.ComplexList {
  public internalValue? : OrbitalContactProfileLinksChannelsEndPoint[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrbitalContactProfileLinksChannelsEndPointOutputReference {
    return new OrbitalContactProfileLinksChannelsEndPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrbitalContactProfileLinksChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}
  */
  readonly bandwidthMhz: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}
  */
  readonly centerFrequencyMhz: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}
  */
  readonly demodulationConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}
  */
  readonly modulationConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}
  */
  readonly name: string;
  /**
  * end_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#end_point OrbitalContactProfile#end_point}
  */
  readonly endPoint: OrbitalContactProfileLinksChannelsEndPoint[] | cdktf.IResolvable;
}

export function orbitalContactProfileLinksChannelsToTerraform(struct?: OrbitalContactProfileLinksChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mhz: cdktf.numberToTerraform(struct!.bandwidthMhz),
    center_frequency_mhz: cdktf.numberToTerraform(struct!.centerFrequencyMhz),
    demodulation_configuration: cdktf.stringToTerraform(struct!.demodulationConfiguration),
    modulation_configuration: cdktf.stringToTerraform(struct!.modulationConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
    end_point: cdktf.listMapper(orbitalContactProfileLinksChannelsEndPointToTerraform, true)(struct!.endPoint),
  }
}


export function orbitalContactProfileLinksChannelsToHclTerraform(struct?: OrbitalContactProfileLinksChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_mhz: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    center_frequency_mhz: {
      value: cdktf.numberToHclTerraform(struct!.centerFrequencyMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    demodulation_configuration: {
      value: cdktf.stringToHclTerraform(struct!.demodulationConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulation_configuration: {
      value: cdktf.stringToHclTerraform(struct!.modulationConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point: {
      value: cdktf.listMapperHcl(orbitalContactProfileLinksChannelsEndPointToHclTerraform, true)(struct!.endPoint),
      isBlock: true,
      type: "set",
      storageClassType: "OrbitalContactProfileLinksChannelsEndPointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalContactProfileLinksChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrbitalContactProfileLinksChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMhz = this._bandwidthMhz;
    }
    if (this._centerFrequencyMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerFrequencyMhz = this._centerFrequencyMhz;
    }
    if (this._demodulationConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.demodulationConfiguration = this._demodulationConfiguration;
    }
    if (this._modulationConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulationConfiguration = this._modulationConfiguration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._endPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPoint = this._endPoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalContactProfileLinksChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthMhz = undefined;
      this._centerFrequencyMhz = undefined;
      this._demodulationConfiguration = undefined;
      this._modulationConfiguration = undefined;
      this._name = undefined;
      this._endPoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthMhz = value.bandwidthMhz;
      this._centerFrequencyMhz = value.centerFrequencyMhz;
      this._demodulationConfiguration = value.demodulationConfiguration;
      this._modulationConfiguration = value.modulationConfiguration;
      this._name = value.name;
      this._endPoint.internalValue = value.endPoint;
    }
  }

  // bandwidth_mhz - computed: false, optional: false, required: true
  private _bandwidthMhz?: number; 
  public get bandwidthMhz() {
    return this.getNumberAttribute('bandwidth_mhz');
  }
  public set bandwidthMhz(value: number) {
    this._bandwidthMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMhzInput() {
    return this._bandwidthMhz;
  }

  // center_frequency_mhz - computed: false, optional: false, required: true
  private _centerFrequencyMhz?: number; 
  public get centerFrequencyMhz() {
    return this.getNumberAttribute('center_frequency_mhz');
  }
  public set centerFrequencyMhz(value: number) {
    this._centerFrequencyMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get centerFrequencyMhzInput() {
    return this._centerFrequencyMhz;
  }

  // demodulation_configuration - computed: false, optional: true, required: false
  private _demodulationConfiguration?: string; 
  public get demodulationConfiguration() {
    return this.getStringAttribute('demodulation_configuration');
  }
  public set demodulationConfiguration(value: string) {
    this._demodulationConfiguration = value;
  }
  public resetDemodulationConfiguration() {
    this._demodulationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demodulationConfigurationInput() {
    return this._demodulationConfiguration;
  }

  // modulation_configuration - computed: false, optional: true, required: false
  private _modulationConfiguration?: string; 
  public get modulationConfiguration() {
    return this.getStringAttribute('modulation_configuration');
  }
  public set modulationConfiguration(value: string) {
    this._modulationConfiguration = value;
  }
  public resetModulationConfiguration() {
    this._modulationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulationConfigurationInput() {
    return this._modulationConfiguration;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // end_point - computed: false, optional: false, required: true
  private _endPoint = new OrbitalContactProfileLinksChannelsEndPointList(this, "end_point", true);
  public get endPoint() {
    return this._endPoint;
  }
  public putEndPoint(value: OrbitalContactProfileLinksChannelsEndPoint[] | cdktf.IResolvable) {
    this._endPoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointInput() {
    return this._endPoint.internalValue;
  }
}

export class OrbitalContactProfileLinksChannelsList extends cdktf.ComplexList {
  public internalValue? : OrbitalContactProfileLinksChannels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrbitalContactProfileLinksChannelsOutputReference {
    return new OrbitalContactProfileLinksChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrbitalContactProfileLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}
  */
  readonly polarization: string;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#channels OrbitalContactProfile#channels}
  */
  readonly channels: OrbitalContactProfileLinksChannels[] | cdktf.IResolvable;
}

export function orbitalContactProfileLinksToTerraform(struct?: OrbitalContactProfileLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
    polarization: cdktf.stringToTerraform(struct!.polarization),
    channels: cdktf.listMapper(orbitalContactProfileLinksChannelsToTerraform, true)(struct!.channels),
  }
}


export function orbitalContactProfileLinksToHclTerraform(struct?: OrbitalContactProfileLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polarization: {
      value: cdktf.stringToHclTerraform(struct!.polarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channels: {
      value: cdktf.listMapperHcl(orbitalContactProfileLinksChannelsToHclTerraform, true)(struct!.channels),
      isBlock: true,
      type: "list",
      storageClassType: "OrbitalContactProfileLinksChannelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalContactProfileLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrbitalContactProfileLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._polarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.polarization = this._polarization;
    }
    if (this._channels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalContactProfileLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._polarization = undefined;
      this._channels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
      this._polarization = value.polarization;
      this._channels.internalValue = value.channels;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // polarization - computed: false, optional: false, required: true
  private _polarization?: string; 
  public get polarization() {
    return this.getStringAttribute('polarization');
  }
  public set polarization(value: string) {
    this._polarization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get polarizationInput() {
    return this._polarization;
  }

  // channels - computed: false, optional: false, required: true
  private _channels = new OrbitalContactProfileLinksChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: OrbitalContactProfileLinksChannels[] | cdktf.IResolvable) {
    this._channels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }
}

export class OrbitalContactProfileLinksList extends cdktf.ComplexList {
  public internalValue? : OrbitalContactProfileLinks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrbitalContactProfileLinksOutputReference {
    return new OrbitalContactProfileLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrbitalContactProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}
  */
  readonly update?: string;
}

export function orbitalContactProfileTimeoutsToTerraform(struct?: OrbitalContactProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function orbitalContactProfileTimeoutsToHclTerraform(struct?: OrbitalContactProfileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalContactProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrbitalContactProfileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalContactProfileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile azurerm_orbital_contact_profile}
*/
export class OrbitalContactProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_orbital_contact_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrbitalContactProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrbitalContactProfile to import
  * @param importFromId The id of the existing OrbitalContactProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrbitalContactProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_orbital_contact_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact_profile azurerm_orbital_contact_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrbitalContactProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OrbitalContactProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orbital_contact_profile',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoTracking = config.autoTracking;
    this._eventHubUri = config.eventHubUri;
    this._id = config.id;
    this._location = config.location;
    this._minimumElevationDegrees = config.minimumElevationDegrees;
    this._minimumVariableContactDuration = config.minimumVariableContactDuration;
    this._name = config.name;
    this._networkConfigurationSubnetId = config.networkConfigurationSubnetId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._links.internalValue = config.links;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tracking - computed: false, optional: false, required: true
  private _autoTracking?: string; 
  public get autoTracking() {
    return this.getStringAttribute('auto_tracking');
  }
  public set autoTracking(value: string) {
    this._autoTracking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTrackingInput() {
    return this._autoTracking;
  }

  // event_hub_uri - computed: false, optional: true, required: false
  private _eventHubUri?: string; 
  public get eventHubUri() {
    return this.getStringAttribute('event_hub_uri');
  }
  public set eventHubUri(value: string) {
    this._eventHubUri = value;
  }
  public resetEventHubUri() {
    this._eventHubUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubUriInput() {
    return this._eventHubUri;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // minimum_elevation_degrees - computed: false, optional: true, required: false
  private _minimumElevationDegrees?: number; 
  public get minimumElevationDegrees() {
    return this.getNumberAttribute('minimum_elevation_degrees');
  }
  public set minimumElevationDegrees(value: number) {
    this._minimumElevationDegrees = value;
  }
  public resetMinimumElevationDegrees() {
    this._minimumElevationDegrees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumElevationDegreesInput() {
    return this._minimumElevationDegrees;
  }

  // minimum_variable_contact_duration - computed: false, optional: false, required: true
  private _minimumVariableContactDuration?: string; 
  public get minimumVariableContactDuration() {
    return this.getStringAttribute('minimum_variable_contact_duration');
  }
  public set minimumVariableContactDuration(value: string) {
    this._minimumVariableContactDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumVariableContactDurationInput() {
    return this._minimumVariableContactDuration;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_configuration_subnet_id - computed: false, optional: false, required: true
  private _networkConfigurationSubnetId?: string; 
  public get networkConfigurationSubnetId() {
    return this.getStringAttribute('network_configuration_subnet_id');
  }
  public set networkConfigurationSubnetId(value: string) {
    this._networkConfigurationSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationSubnetIdInput() {
    return this._networkConfigurationSubnetId;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // links - computed: false, optional: false, required: true
  private _links = new OrbitalContactProfileLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: OrbitalContactProfileLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrbitalContactProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrbitalContactProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_tracking: cdktf.stringToTerraform(this._autoTracking),
      event_hub_uri: cdktf.stringToTerraform(this._eventHubUri),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      minimum_elevation_degrees: cdktf.numberToTerraform(this._minimumElevationDegrees),
      minimum_variable_contact_duration: cdktf.stringToTerraform(this._minimumVariableContactDuration),
      name: cdktf.stringToTerraform(this._name),
      network_configuration_subnet_id: cdktf.stringToTerraform(this._networkConfigurationSubnetId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      links: cdktf.listMapper(orbitalContactProfileLinksToTerraform, true)(this._links.internalValue),
      timeouts: orbitalContactProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_tracking: {
        value: cdktf.stringToHclTerraform(this._autoTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_hub_uri: {
        value: cdktf.stringToHclTerraform(this._eventHubUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_elevation_degrees: {
        value: cdktf.numberToHclTerraform(this._minimumElevationDegrees),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_variable_contact_duration: {
        value: cdktf.stringToHclTerraform(this._minimumVariableContactDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration_subnet_id: {
        value: cdktf.stringToHclTerraform(this._networkConfigurationSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      links: {
        value: cdktf.listMapperHcl(orbitalContactProfileLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrbitalContactProfileLinksList",
      },
      timeouts: {
        value: orbitalContactProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrbitalContactProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
