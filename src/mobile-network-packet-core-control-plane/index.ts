// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkPacketCoreControlPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_address MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_address}
  */
  readonly controlPlaneAccessIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_gateway MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_gateway}
  */
  readonly controlPlaneAccessIpv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_ipv4_subnet MobileNetworkPacketCoreControlPlane#control_plane_access_ipv4_subnet}
  */
  readonly controlPlaneAccessIpv4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#control_plane_access_name MobileNetworkPacketCoreControlPlane#control_plane_access_name}
  */
  readonly controlPlaneAccessName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#core_network_technology MobileNetworkPacketCoreControlPlane#core_network_technology}
  */
  readonly coreNetworkTechnology?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#id MobileNetworkPacketCoreControlPlane#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#interoperability_settings_json MobileNetworkPacketCoreControlPlane#interoperability_settings_json}
  */
  readonly interoperabilitySettingsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#location MobileNetworkPacketCoreControlPlane#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#name MobileNetworkPacketCoreControlPlane#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#resource_group_name MobileNetworkPacketCoreControlPlane#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#site_ids MobileNetworkPacketCoreControlPlane#site_ids}
  */
  readonly siteIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#sku MobileNetworkPacketCoreControlPlane#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#software_version MobileNetworkPacketCoreControlPlane#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#tags MobileNetworkPacketCoreControlPlane#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#user_equipment_mtu_in_bytes MobileNetworkPacketCoreControlPlane#user_equipment_mtu_in_bytes}
  */
  readonly userEquipmentMtuInBytes?: number;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#identity MobileNetworkPacketCoreControlPlane#identity}
  */
  readonly identity?: MobileNetworkPacketCoreControlPlaneIdentity;
  /**
  * local_diagnostics_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#local_diagnostics_access MobileNetworkPacketCoreControlPlane#local_diagnostics_access}
  */
  readonly localDiagnosticsAccess: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess;
  /**
  * platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#platform MobileNetworkPacketCoreControlPlane#platform}
  */
  readonly platform?: MobileNetworkPacketCoreControlPlanePlatform;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#timeouts MobileNetworkPacketCoreControlPlane#timeouts}
  */
  readonly timeouts?: MobileNetworkPacketCoreControlPlaneTimeouts;
}
export interface MobileNetworkPacketCoreControlPlaneIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#identity_ids MobileNetworkPacketCoreControlPlane#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}
  */
  readonly type: string;
}

export function mobileNetworkPacketCoreControlPlaneIdentityToTerraform(struct?: MobileNetworkPacketCoreControlPlaneIdentityOutputReference | MobileNetworkPacketCoreControlPlaneIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mobileNetworkPacketCoreControlPlaneIdentityToHclTerraform(struct?: MobileNetworkPacketCoreControlPlaneIdentityOutputReference | MobileNetworkPacketCoreControlPlaneIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkPacketCoreControlPlaneIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkPacketCoreControlPlaneIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkPacketCoreControlPlaneIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#authentication_type MobileNetworkPacketCoreControlPlane#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#https_server_certificate_url MobileNetworkPacketCoreControlPlane#https_server_certificate_url}
  */
  readonly httpsServerCertificateUrl?: string;
}

export function mobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessToTerraform(struct?: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference | MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    https_server_certificate_url: cdktf.stringToTerraform(struct!.httpsServerCertificateUrl),
  }
}


export function mobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessToHclTerraform(struct?: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference | MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_server_certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.httpsServerCertificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._httpsServerCertificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsServerCertificateUrl = this._httpsServerCertificateUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._httpsServerCertificateUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._httpsServerCertificateUrl = value.httpsServerCertificateUrl;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // https_server_certificate_url - computed: false, optional: true, required: false
  private _httpsServerCertificateUrl?: string; 
  public get httpsServerCertificateUrl() {
    return this.getStringAttribute('https_server_certificate_url');
  }
  public set httpsServerCertificateUrl(value: string) {
    this._httpsServerCertificateUrl = value;
  }
  public resetHttpsServerCertificateUrl() {
    this._httpsServerCertificateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerCertificateUrlInput() {
    return this._httpsServerCertificateUrl;
  }
}
export interface MobileNetworkPacketCoreControlPlanePlatform {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#arc_kubernetes_cluster_id MobileNetworkPacketCoreControlPlane#arc_kubernetes_cluster_id}
  */
  readonly arcKubernetesClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#custom_location_id MobileNetworkPacketCoreControlPlane#custom_location_id}
  */
  readonly customLocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#edge_device_id MobileNetworkPacketCoreControlPlane#edge_device_id}
  */
  readonly edgeDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#stack_hci_cluster_id MobileNetworkPacketCoreControlPlane#stack_hci_cluster_id}
  */
  readonly stackHciClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#type MobileNetworkPacketCoreControlPlane#type}
  */
  readonly type: string;
}

export function mobileNetworkPacketCoreControlPlanePlatformToTerraform(struct?: MobileNetworkPacketCoreControlPlanePlatformOutputReference | MobileNetworkPacketCoreControlPlanePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arc_kubernetes_cluster_id: cdktf.stringToTerraform(struct!.arcKubernetesClusterId),
    custom_location_id: cdktf.stringToTerraform(struct!.customLocationId),
    edge_device_id: cdktf.stringToTerraform(struct!.edgeDeviceId),
    stack_hci_cluster_id: cdktf.stringToTerraform(struct!.stackHciClusterId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mobileNetworkPacketCoreControlPlanePlatformToHclTerraform(struct?: MobileNetworkPacketCoreControlPlanePlatformOutputReference | MobileNetworkPacketCoreControlPlanePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arc_kubernetes_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.arcKubernetesClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_location_id: {
      value: cdktf.stringToHclTerraform(struct!.customLocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_device_id: {
      value: cdktf.stringToHclTerraform(struct!.edgeDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_hci_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.stackHciClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkPacketCoreControlPlanePlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkPacketCoreControlPlanePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arcKubernetesClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.arcKubernetesClusterId = this._arcKubernetesClusterId;
    }
    if (this._customLocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLocationId = this._customLocationId;
    }
    if (this._edgeDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeDeviceId = this._edgeDeviceId;
    }
    if (this._stackHciClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackHciClusterId = this._stackHciClusterId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkPacketCoreControlPlanePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arcKubernetesClusterId = undefined;
      this._customLocationId = undefined;
      this._edgeDeviceId = undefined;
      this._stackHciClusterId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arcKubernetesClusterId = value.arcKubernetesClusterId;
      this._customLocationId = value.customLocationId;
      this._edgeDeviceId = value.edgeDeviceId;
      this._stackHciClusterId = value.stackHciClusterId;
      this._type = value.type;
    }
  }

  // arc_kubernetes_cluster_id - computed: false, optional: true, required: false
  private _arcKubernetesClusterId?: string; 
  public get arcKubernetesClusterId() {
    return this.getStringAttribute('arc_kubernetes_cluster_id');
  }
  public set arcKubernetesClusterId(value: string) {
    this._arcKubernetesClusterId = value;
  }
  public resetArcKubernetesClusterId() {
    this._arcKubernetesClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arcKubernetesClusterIdInput() {
    return this._arcKubernetesClusterId;
  }

  // custom_location_id - computed: false, optional: true, required: false
  private _customLocationId?: string; 
  public get customLocationId() {
    return this.getStringAttribute('custom_location_id');
  }
  public set customLocationId(value: string) {
    this._customLocationId = value;
  }
  public resetCustomLocationId() {
    this._customLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLocationIdInput() {
    return this._customLocationId;
  }

  // edge_device_id - computed: false, optional: true, required: false
  private _edgeDeviceId?: string; 
  public get edgeDeviceId() {
    return this.getStringAttribute('edge_device_id');
  }
  public set edgeDeviceId(value: string) {
    this._edgeDeviceId = value;
  }
  public resetEdgeDeviceId() {
    this._edgeDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeDeviceIdInput() {
    return this._edgeDeviceId;
  }

  // stack_hci_cluster_id - computed: false, optional: true, required: false
  private _stackHciClusterId?: string; 
  public get stackHciClusterId() {
    return this.getStringAttribute('stack_hci_cluster_id');
  }
  public set stackHciClusterId(value: string) {
    this._stackHciClusterId = value;
  }
  public resetStackHciClusterId() {
    this._stackHciClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackHciClusterIdInput() {
    return this._stackHciClusterId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MobileNetworkPacketCoreControlPlaneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#create MobileNetworkPacketCoreControlPlane#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#delete MobileNetworkPacketCoreControlPlane#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#read MobileNetworkPacketCoreControlPlane#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#update MobileNetworkPacketCoreControlPlane#update}
  */
  readonly update?: string;
}

export function mobileNetworkPacketCoreControlPlaneTimeoutsToTerraform(struct?: MobileNetworkPacketCoreControlPlaneTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkPacketCoreControlPlaneTimeoutsToHclTerraform(struct?: MobileNetworkPacketCoreControlPlaneTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkPacketCoreControlPlaneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkPacketCoreControlPlaneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane}
*/
export class MobileNetworkPacketCoreControlPlane extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_packet_core_control_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkPacketCoreControlPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkPacketCoreControlPlane to import
  * @param importFromId The id of the existing MobileNetworkPacketCoreControlPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkPacketCoreControlPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_packet_core_control_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_packet_core_control_plane azurerm_mobile_network_packet_core_control_plane} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkPacketCoreControlPlaneConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkPacketCoreControlPlaneConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_packet_core_control_plane',
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
    this._controlPlaneAccessIpv4Address = config.controlPlaneAccessIpv4Address;
    this._controlPlaneAccessIpv4Gateway = config.controlPlaneAccessIpv4Gateway;
    this._controlPlaneAccessIpv4Subnet = config.controlPlaneAccessIpv4Subnet;
    this._controlPlaneAccessName = config.controlPlaneAccessName;
    this._coreNetworkTechnology = config.coreNetworkTechnology;
    this._id = config.id;
    this._interoperabilitySettingsJson = config.interoperabilitySettingsJson;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._siteIds = config.siteIds;
    this._sku = config.sku;
    this._softwareVersion = config.softwareVersion;
    this._tags = config.tags;
    this._userEquipmentMtuInBytes = config.userEquipmentMtuInBytes;
    this._identity.internalValue = config.identity;
    this._localDiagnosticsAccess.internalValue = config.localDiagnosticsAccess;
    this._platform.internalValue = config.platform;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_access_ipv4_address - computed: false, optional: true, required: false
  private _controlPlaneAccessIpv4Address?: string; 
  public get controlPlaneAccessIpv4Address() {
    return this.getStringAttribute('control_plane_access_ipv4_address');
  }
  public set controlPlaneAccessIpv4Address(value: string) {
    this._controlPlaneAccessIpv4Address = value;
  }
  public resetControlPlaneAccessIpv4Address() {
    this._controlPlaneAccessIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAccessIpv4AddressInput() {
    return this._controlPlaneAccessIpv4Address;
  }

  // control_plane_access_ipv4_gateway - computed: false, optional: true, required: false
  private _controlPlaneAccessIpv4Gateway?: string; 
  public get controlPlaneAccessIpv4Gateway() {
    return this.getStringAttribute('control_plane_access_ipv4_gateway');
  }
  public set controlPlaneAccessIpv4Gateway(value: string) {
    this._controlPlaneAccessIpv4Gateway = value;
  }
  public resetControlPlaneAccessIpv4Gateway() {
    this._controlPlaneAccessIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAccessIpv4GatewayInput() {
    return this._controlPlaneAccessIpv4Gateway;
  }

  // control_plane_access_ipv4_subnet - computed: false, optional: true, required: false
  private _controlPlaneAccessIpv4Subnet?: string; 
  public get controlPlaneAccessIpv4Subnet() {
    return this.getStringAttribute('control_plane_access_ipv4_subnet');
  }
  public set controlPlaneAccessIpv4Subnet(value: string) {
    this._controlPlaneAccessIpv4Subnet = value;
  }
  public resetControlPlaneAccessIpv4Subnet() {
    this._controlPlaneAccessIpv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAccessIpv4SubnetInput() {
    return this._controlPlaneAccessIpv4Subnet;
  }

  // control_plane_access_name - computed: false, optional: true, required: false
  private _controlPlaneAccessName?: string; 
  public get controlPlaneAccessName() {
    return this.getStringAttribute('control_plane_access_name');
  }
  public set controlPlaneAccessName(value: string) {
    this._controlPlaneAccessName = value;
  }
  public resetControlPlaneAccessName() {
    this._controlPlaneAccessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneAccessNameInput() {
    return this._controlPlaneAccessName;
  }

  // core_network_technology - computed: false, optional: true, required: false
  private _coreNetworkTechnology?: string; 
  public get coreNetworkTechnology() {
    return this.getStringAttribute('core_network_technology');
  }
  public set coreNetworkTechnology(value: string) {
    this._coreNetworkTechnology = value;
  }
  public resetCoreNetworkTechnology() {
    this._coreNetworkTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkTechnologyInput() {
    return this._coreNetworkTechnology;
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

  // interoperability_settings_json - computed: false, optional: true, required: false
  private _interoperabilitySettingsJson?: string; 
  public get interoperabilitySettingsJson() {
    return this.getStringAttribute('interoperability_settings_json');
  }
  public set interoperabilitySettingsJson(value: string) {
    this._interoperabilitySettingsJson = value;
  }
  public resetInteroperabilitySettingsJson() {
    this._interoperabilitySettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interoperabilitySettingsJsonInput() {
    return this._interoperabilitySettingsJson;
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

  // site_ids - computed: false, optional: false, required: true
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // software_version - computed: false, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
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

  // user_equipment_mtu_in_bytes - computed: false, optional: true, required: false
  private _userEquipmentMtuInBytes?: number; 
  public get userEquipmentMtuInBytes() {
    return this.getNumberAttribute('user_equipment_mtu_in_bytes');
  }
  public set userEquipmentMtuInBytes(value: number) {
    this._userEquipmentMtuInBytes = value;
  }
  public resetUserEquipmentMtuInBytes() {
    this._userEquipmentMtuInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEquipmentMtuInBytesInput() {
    return this._userEquipmentMtuInBytes;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MobileNetworkPacketCoreControlPlaneIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MobileNetworkPacketCoreControlPlaneIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // local_diagnostics_access - computed: false, optional: false, required: true
  private _localDiagnosticsAccess = new MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessOutputReference(this, "local_diagnostics_access");
  public get localDiagnosticsAccess() {
    return this._localDiagnosticsAccess;
  }
  public putLocalDiagnosticsAccess(value: MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccess) {
    this._localDiagnosticsAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiagnosticsAccessInput() {
    return this._localDiagnosticsAccess.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new MobileNetworkPacketCoreControlPlanePlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: MobileNetworkPacketCoreControlPlanePlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkPacketCoreControlPlaneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkPacketCoreControlPlaneTimeouts) {
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
      control_plane_access_ipv4_address: cdktf.stringToTerraform(this._controlPlaneAccessIpv4Address),
      control_plane_access_ipv4_gateway: cdktf.stringToTerraform(this._controlPlaneAccessIpv4Gateway),
      control_plane_access_ipv4_subnet: cdktf.stringToTerraform(this._controlPlaneAccessIpv4Subnet),
      control_plane_access_name: cdktf.stringToTerraform(this._controlPlaneAccessName),
      core_network_technology: cdktf.stringToTerraform(this._coreNetworkTechnology),
      id: cdktf.stringToTerraform(this._id),
      interoperability_settings_json: cdktf.stringToTerraform(this._interoperabilitySettingsJson),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteIds),
      sku: cdktf.stringToTerraform(this._sku),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_equipment_mtu_in_bytes: cdktf.numberToTerraform(this._userEquipmentMtuInBytes),
      identity: mobileNetworkPacketCoreControlPlaneIdentityToTerraform(this._identity.internalValue),
      local_diagnostics_access: mobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessToTerraform(this._localDiagnosticsAccess.internalValue),
      platform: mobileNetworkPacketCoreControlPlanePlatformToTerraform(this._platform.internalValue),
      timeouts: mobileNetworkPacketCoreControlPlaneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_access_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._controlPlaneAccessIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_access_ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._controlPlaneAccessIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_access_ipv4_subnet: {
        value: cdktf.stringToHclTerraform(this._controlPlaneAccessIpv4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_access_name: {
        value: cdktf.stringToHclTerraform(this._controlPlaneAccessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_technology: {
        value: cdktf.stringToHclTerraform(this._coreNetworkTechnology),
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
      interoperability_settings_json: {
        value: cdktf.stringToHclTerraform(this._interoperabilitySettingsJson),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      site_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
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
      user_equipment_mtu_in_bytes: {
        value: cdktf.numberToHclTerraform(this._userEquipmentMtuInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity: {
        value: mobileNetworkPacketCoreControlPlaneIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkPacketCoreControlPlaneIdentityList",
      },
      local_diagnostics_access: {
        value: mobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessToHclTerraform(this._localDiagnosticsAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkPacketCoreControlPlaneLocalDiagnosticsAccessList",
      },
      platform: {
        value: mobileNetworkPacketCoreControlPlanePlatformToHclTerraform(this._platform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkPacketCoreControlPlanePlatformList",
      },
      timeouts: {
        value: mobileNetworkPacketCoreControlPlaneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkPacketCoreControlPlaneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
