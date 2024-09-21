// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkSimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#authentication_key MobileNetworkSim#authentication_key}
  */
  readonly authenticationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#device_type MobileNetworkSim#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#id MobileNetworkSim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#integrated_circuit_card_identifier MobileNetworkSim#integrated_circuit_card_identifier}
  */
  readonly integratedCircuitCardIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#international_mobile_subscriber_identity MobileNetworkSim#international_mobile_subscriber_identity}
  */
  readonly internationalMobileSubscriberIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#mobile_network_sim_group_id MobileNetworkSim#mobile_network_sim_group_id}
  */
  readonly mobileNetworkSimGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#name MobileNetworkSim#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#operator_key_code MobileNetworkSim#operator_key_code}
  */
  readonly operatorKeyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#sim_policy_id MobileNetworkSim#sim_policy_id}
  */
  readonly simPolicyId?: string;
  /**
  * static_ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#static_ip_configuration MobileNetworkSim#static_ip_configuration}
  */
  readonly staticIpConfiguration?: MobileNetworkSimStaticIpConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#timeouts MobileNetworkSim#timeouts}
  */
  readonly timeouts?: MobileNetworkSimTimeouts;
}
export interface MobileNetworkSimStaticIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#attached_data_network_id MobileNetworkSim#attached_data_network_id}
  */
  readonly attachedDataNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#slice_id MobileNetworkSim#slice_id}
  */
  readonly sliceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#static_ipv4_address MobileNetworkSim#static_ipv4_address}
  */
  readonly staticIpv4Address?: string;
}

export function mobileNetworkSimStaticIpConfigurationToTerraform(struct?: MobileNetworkSimStaticIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attached_data_network_id: cdktf.stringToTerraform(struct!.attachedDataNetworkId),
    slice_id: cdktf.stringToTerraform(struct!.sliceId),
    static_ipv4_address: cdktf.stringToTerraform(struct!.staticIpv4Address),
  }
}


export function mobileNetworkSimStaticIpConfigurationToHclTerraform(struct?: MobileNetworkSimStaticIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attached_data_network_id: {
      value: cdktf.stringToHclTerraform(struct!.attachedDataNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slice_id: {
      value: cdktf.stringToHclTerraform(struct!.sliceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.staticIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkSimStaticIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileNetworkSimStaticIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachedDataNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachedDataNetworkId = this._attachedDataNetworkId;
    }
    if (this._sliceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliceId = this._sliceId;
    }
    if (this._staticIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4Address = this._staticIpv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSimStaticIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachedDataNetworkId = undefined;
      this._sliceId = undefined;
      this._staticIpv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachedDataNetworkId = value.attachedDataNetworkId;
      this._sliceId = value.sliceId;
      this._staticIpv4Address = value.staticIpv4Address;
    }
  }

  // attached_data_network_id - computed: false, optional: false, required: true
  private _attachedDataNetworkId?: string; 
  public get attachedDataNetworkId() {
    return this.getStringAttribute('attached_data_network_id');
  }
  public set attachedDataNetworkId(value: string) {
    this._attachedDataNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedDataNetworkIdInput() {
    return this._attachedDataNetworkId;
  }

  // slice_id - computed: false, optional: false, required: true
  private _sliceId?: string; 
  public get sliceId() {
    return this.getStringAttribute('slice_id');
  }
  public set sliceId(value: string) {
    this._sliceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceIdInput() {
    return this._sliceId;
  }

  // static_ipv4_address - computed: false, optional: true, required: false
  private _staticIpv4Address?: string; 
  public get staticIpv4Address() {
    return this.getStringAttribute('static_ipv4_address');
  }
  public set staticIpv4Address(value: string) {
    this._staticIpv4Address = value;
  }
  public resetStaticIpv4Address() {
    this._staticIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4AddressInput() {
    return this._staticIpv4Address;
  }
}

export class MobileNetworkSimStaticIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : MobileNetworkSimStaticIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): MobileNetworkSimStaticIpConfigurationOutputReference {
    return new MobileNetworkSimStaticIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileNetworkSimTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#create MobileNetworkSim#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#delete MobileNetworkSim#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#read MobileNetworkSim#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#update MobileNetworkSim#update}
  */
  readonly update?: string;
}

export function mobileNetworkSimTimeoutsToTerraform(struct?: MobileNetworkSimTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkSimTimeoutsToHclTerraform(struct?: MobileNetworkSimTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkSimTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkSimTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkSimTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim azurerm_mobile_network_sim}
*/
export class MobileNetworkSim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_sim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkSim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkSim to import
  * @param importFromId The id of the existing MobileNetworkSim that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkSim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_sim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim azurerm_mobile_network_sim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkSimConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkSimConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_sim',
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
    this._authenticationKey = config.authenticationKey;
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._integratedCircuitCardIdentifier = config.integratedCircuitCardIdentifier;
    this._internationalMobileSubscriberIdentity = config.internationalMobileSubscriberIdentity;
    this._mobileNetworkSimGroupId = config.mobileNetworkSimGroupId;
    this._name = config.name;
    this._operatorKeyCode = config.operatorKeyCode;
    this._simPolicyId = config.simPolicyId;
    this._staticIpConfiguration.internalValue = config.staticIpConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_key - computed: false, optional: false, required: true
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // integrated_circuit_card_identifier - computed: false, optional: false, required: true
  private _integratedCircuitCardIdentifier?: string; 
  public get integratedCircuitCardIdentifier() {
    return this.getStringAttribute('integrated_circuit_card_identifier');
  }
  public set integratedCircuitCardIdentifier(value: string) {
    this._integratedCircuitCardIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integratedCircuitCardIdentifierInput() {
    return this._integratedCircuitCardIdentifier;
  }

  // international_mobile_subscriber_identity - computed: false, optional: false, required: true
  private _internationalMobileSubscriberIdentity?: string; 
  public get internationalMobileSubscriberIdentity() {
    return this.getStringAttribute('international_mobile_subscriber_identity');
  }
  public set internationalMobileSubscriberIdentity(value: string) {
    this._internationalMobileSubscriberIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalMobileSubscriberIdentityInput() {
    return this._internationalMobileSubscriberIdentity;
  }

  // mobile_network_sim_group_id - computed: false, optional: false, required: true
  private _mobileNetworkSimGroupId?: string; 
  public get mobileNetworkSimGroupId() {
    return this.getStringAttribute('mobile_network_sim_group_id');
  }
  public set mobileNetworkSimGroupId(value: string) {
    this._mobileNetworkSimGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkSimGroupIdInput() {
    return this._mobileNetworkSimGroupId;
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

  // operator_key_code - computed: false, optional: false, required: true
  private _operatorKeyCode?: string; 
  public get operatorKeyCode() {
    return this.getStringAttribute('operator_key_code');
  }
  public set operatorKeyCode(value: string) {
    this._operatorKeyCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorKeyCodeInput() {
    return this._operatorKeyCode;
  }

  // sim_policy_id - computed: false, optional: true, required: false
  private _simPolicyId?: string; 
  public get simPolicyId() {
    return this.getStringAttribute('sim_policy_id');
  }
  public set simPolicyId(value: string) {
    this._simPolicyId = value;
  }
  public resetSimPolicyId() {
    this._simPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simPolicyIdInput() {
    return this._simPolicyId;
  }

  // sim_state - computed: true, optional: false, required: false
  public get simState() {
    return this.getStringAttribute('sim_state');
  }

  // vendor_key_fingerprint - computed: true, optional: false, required: false
  public get vendorKeyFingerprint() {
    return this.getStringAttribute('vendor_key_fingerprint');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // static_ip_configuration - computed: false, optional: true, required: false
  private _staticIpConfiguration = new MobileNetworkSimStaticIpConfigurationList(this, "static_ip_configuration", false);
  public get staticIpConfiguration() {
    return this._staticIpConfiguration;
  }
  public putStaticIpConfiguration(value: MobileNetworkSimStaticIpConfiguration[] | cdktf.IResolvable) {
    this._staticIpConfiguration.internalValue = value;
  }
  public resetStaticIpConfiguration() {
    this._staticIpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpConfigurationInput() {
    return this._staticIpConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkSimTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkSimTimeouts) {
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
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      integrated_circuit_card_identifier: cdktf.stringToTerraform(this._integratedCircuitCardIdentifier),
      international_mobile_subscriber_identity: cdktf.stringToTerraform(this._internationalMobileSubscriberIdentity),
      mobile_network_sim_group_id: cdktf.stringToTerraform(this._mobileNetworkSimGroupId),
      name: cdktf.stringToTerraform(this._name),
      operator_key_code: cdktf.stringToTerraform(this._operatorKeyCode),
      sim_policy_id: cdktf.stringToTerraform(this._simPolicyId),
      static_ip_configuration: cdktf.listMapper(mobileNetworkSimStaticIpConfigurationToTerraform, true)(this._staticIpConfiguration.internalValue),
      timeouts: mobileNetworkSimTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      integrated_circuit_card_identifier: {
        value: cdktf.stringToHclTerraform(this._integratedCircuitCardIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      international_mobile_subscriber_identity: {
        value: cdktf.stringToHclTerraform(this._internationalMobileSubscriberIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_network_sim_group_id: {
        value: cdktf.stringToHclTerraform(this._mobileNetworkSimGroupId),
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
      operator_key_code: {
        value: cdktf.stringToHclTerraform(this._operatorKeyCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_policy_id: {
        value: cdktf.stringToHclTerraform(this._simPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ip_configuration: {
        value: cdktf.listMapperHcl(mobileNetworkSimStaticIpConfigurationToHclTerraform, true)(this._staticIpConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkSimStaticIpConfigurationList",
      },
      timeouts: {
        value: mobileNetworkSimTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkSimTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
