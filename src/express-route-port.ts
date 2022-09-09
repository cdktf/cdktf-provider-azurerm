// https://www.terraform.io/docs/providers/azurerm/r/express_route_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRoutePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}
  */
  readonly bandwidthInGbps: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#encapsulation ExpressRoutePort#encapsulation}
  */
  readonly encapsulation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#id ExpressRoutePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#location ExpressRoutePort#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#name ExpressRoutePort#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#peering_location ExpressRoutePort#peering_location}
  */
  readonly peeringLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#tags ExpressRoutePort#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#identity ExpressRoutePort#identity}
  */
  readonly identity?: ExpressRoutePortIdentity;
  /**
  * link1 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#link1 ExpressRoutePort#link1}
  */
  readonly link1?: ExpressRoutePortLink1;
  /**
  * link2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#link2 ExpressRoutePort#link2}
  */
  readonly link2?: ExpressRoutePortLink2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#timeouts ExpressRoutePort#timeouts}
  */
  readonly timeouts?: ExpressRoutePortTimeouts;
}
export interface ExpressRoutePortIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#identity_ids ExpressRoutePort#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#type ExpressRoutePort#type}
  */
  readonly type: string;
}

export function expressRoutePortIdentityToTerraform(struct?: ExpressRoutePortIdentityOutputReference | ExpressRoutePortIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ExpressRoutePortIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRoutePortIdentity | undefined {
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

  public set internalValue(value: ExpressRoutePortIdentity | undefined) {
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
export interface ExpressRoutePortLink1 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}
  */
  readonly macsecCakKeyvaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}
  */
  readonly macsecCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}
  */
  readonly macsecCknKeyvaultSecretId?: string;
}

export function expressRoutePortLink1ToTerraform(struct?: ExpressRoutePortLink1OutputReference | ExpressRoutePortLink1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export class ExpressRoutePortLink1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRoutePortLink1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEnabled = this._adminEnabled;
    }
    if (this._macsecCakKeyvaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCakKeyvaultSecretId = this._macsecCakKeyvaultSecretId;
    }
    if (this._macsecCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCipher = this._macsecCipher;
    }
    if (this._macsecCknKeyvaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCknKeyvaultSecretId = this._macsecCknKeyvaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRoutePortLink1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEnabled = undefined;
      this._macsecCakKeyvaultSecretId = undefined;
      this._macsecCipher = undefined;
      this._macsecCknKeyvaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEnabled = value.adminEnabled;
      this._macsecCakKeyvaultSecretId = value.macsecCakKeyvaultSecretId;
      this._macsecCipher = value.macsecCipher;
      this._macsecCknKeyvaultSecretId = value.macsecCknKeyvaultSecretId;
    }
  }

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // macsec_cak_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCakKeyvaultSecretId?: string; 
  public get macsecCakKeyvaultSecretId() {
    return this.getStringAttribute('macsec_cak_keyvault_secret_id');
  }
  public set macsecCakKeyvaultSecretId(value: string) {
    this._macsecCakKeyvaultSecretId = value;
  }
  public resetMacsecCakKeyvaultSecretId() {
    this._macsecCakKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCakKeyvaultSecretIdInput() {
    return this._macsecCakKeyvaultSecretId;
  }

  // macsec_cipher - computed: false, optional: true, required: false
  private _macsecCipher?: string; 
  public get macsecCipher() {
    return this.getStringAttribute('macsec_cipher');
  }
  public set macsecCipher(value: string) {
    this._macsecCipher = value;
  }
  public resetMacsecCipher() {
    this._macsecCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCipherInput() {
    return this._macsecCipher;
  }

  // macsec_ckn_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCknKeyvaultSecretId?: string; 
  public get macsecCknKeyvaultSecretId() {
    return this.getStringAttribute('macsec_ckn_keyvault_secret_id');
  }
  public set macsecCknKeyvaultSecretId(value: string) {
    this._macsecCknKeyvaultSecretId = value;
  }
  public resetMacsecCknKeyvaultSecretId() {
    this._macsecCknKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCknKeyvaultSecretIdInput() {
    return this._macsecCknKeyvaultSecretId;
  }

  // patch_panel_id - computed: true, optional: false, required: false
  public get patchPanelId() {
    return this.getStringAttribute('patch_panel_id');
  }

  // rack_id - computed: true, optional: false, required: false
  public get rackId() {
    return this.getStringAttribute('rack_id');
  }

  // router_name - computed: true, optional: false, required: false
  public get routerName() {
    return this.getStringAttribute('router_name');
  }
}
export interface ExpressRoutePortLink2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}
  */
  readonly macsecCakKeyvaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}
  */
  readonly macsecCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}
  */
  readonly macsecCknKeyvaultSecretId?: string;
}

export function expressRoutePortLink2ToTerraform(struct?: ExpressRoutePortLink2OutputReference | ExpressRoutePortLink2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_enabled: cdktf.booleanToTerraform(struct!.adminEnabled),
    macsec_cak_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCakKeyvaultSecretId),
    macsec_cipher: cdktf.stringToTerraform(struct!.macsecCipher),
    macsec_ckn_keyvault_secret_id: cdktf.stringToTerraform(struct!.macsecCknKeyvaultSecretId),
  }
}

export class ExpressRoutePortLink2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRoutePortLink2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEnabled = this._adminEnabled;
    }
    if (this._macsecCakKeyvaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCakKeyvaultSecretId = this._macsecCakKeyvaultSecretId;
    }
    if (this._macsecCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCipher = this._macsecCipher;
    }
    if (this._macsecCknKeyvaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsecCknKeyvaultSecretId = this._macsecCknKeyvaultSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRoutePortLink2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEnabled = undefined;
      this._macsecCakKeyvaultSecretId = undefined;
      this._macsecCipher = undefined;
      this._macsecCknKeyvaultSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEnabled = value.adminEnabled;
      this._macsecCakKeyvaultSecretId = value.macsecCakKeyvaultSecretId;
      this._macsecCipher = value.macsecCipher;
      this._macsecCknKeyvaultSecretId = value.macsecCknKeyvaultSecretId;
    }
  }

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // macsec_cak_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCakKeyvaultSecretId?: string; 
  public get macsecCakKeyvaultSecretId() {
    return this.getStringAttribute('macsec_cak_keyvault_secret_id');
  }
  public set macsecCakKeyvaultSecretId(value: string) {
    this._macsecCakKeyvaultSecretId = value;
  }
  public resetMacsecCakKeyvaultSecretId() {
    this._macsecCakKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCakKeyvaultSecretIdInput() {
    return this._macsecCakKeyvaultSecretId;
  }

  // macsec_cipher - computed: false, optional: true, required: false
  private _macsecCipher?: string; 
  public get macsecCipher() {
    return this.getStringAttribute('macsec_cipher');
  }
  public set macsecCipher(value: string) {
    this._macsecCipher = value;
  }
  public resetMacsecCipher() {
    this._macsecCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCipherInput() {
    return this._macsecCipher;
  }

  // macsec_ckn_keyvault_secret_id - computed: false, optional: true, required: false
  private _macsecCknKeyvaultSecretId?: string; 
  public get macsecCknKeyvaultSecretId() {
    return this.getStringAttribute('macsec_ckn_keyvault_secret_id');
  }
  public set macsecCknKeyvaultSecretId(value: string) {
    this._macsecCknKeyvaultSecretId = value;
  }
  public resetMacsecCknKeyvaultSecretId() {
    this._macsecCknKeyvaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecCknKeyvaultSecretIdInput() {
    return this._macsecCknKeyvaultSecretId;
  }

  // patch_panel_id - computed: true, optional: false, required: false
  public get patchPanelId() {
    return this.getStringAttribute('patch_panel_id');
  }

  // rack_id - computed: true, optional: false, required: false
  public get rackId() {
    return this.getStringAttribute('rack_id');
  }

  // router_name - computed: true, optional: false, required: false
  public get routerName() {
    return this.getStringAttribute('router_name');
  }
}
export interface ExpressRoutePortTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#create ExpressRoutePort#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#delete ExpressRoutePort#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#read ExpressRoutePort#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port#update ExpressRoutePort#update}
  */
  readonly update?: string;
}

export function expressRoutePortTimeoutsToTerraform(struct?: ExpressRoutePortTimeoutsOutputReference | ExpressRoutePortTimeouts | cdktf.IResolvable): any {
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

export class ExpressRoutePortTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRoutePortTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressRoutePortTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port azurerm_express_route_port}
*/
export class ExpressRoutePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_express_route_port";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_port azurerm_express_route_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRoutePortConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRoutePortConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_port',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.22.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthInGbps = config.bandwidthInGbps;
    this._encapsulation = config.encapsulation;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._peeringLocation = config.peeringLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._link1.internalValue = config.link1;
    this._link2.internalValue = config.link2;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_in_gbps - computed: false, optional: false, required: true
  private _bandwidthInGbps?: number; 
  public get bandwidthInGbps() {
    return this.getNumberAttribute('bandwidth_in_gbps');
  }
  public set bandwidthInGbps(value: number) {
    this._bandwidthInGbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInGbpsInput() {
    return this._bandwidthInGbps;
  }

  // encapsulation - computed: false, optional: false, required: true
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // ethertype - computed: true, optional: false, required: false
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getStringAttribute('mtu');
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

  // peering_location - computed: false, optional: false, required: true
  private _peeringLocation?: string; 
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }
  public set peeringLocation(value: string) {
    this._peeringLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringLocationInput() {
    return this._peeringLocation;
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

  // identity - computed: false, optional: true, required: false
  private _identity = new ExpressRoutePortIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ExpressRoutePortIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // link1 - computed: false, optional: true, required: false
  private _link1 = new ExpressRoutePortLink1OutputReference(this, "link1");
  public get link1() {
    return this._link1;
  }
  public putLink1(value: ExpressRoutePortLink1) {
    this._link1.internalValue = value;
  }
  public resetLink1() {
    this._link1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get link1Input() {
    return this._link1.internalValue;
  }

  // link2 - computed: false, optional: true, required: false
  private _link2 = new ExpressRoutePortLink2OutputReference(this, "link2");
  public get link2() {
    return this._link2;
  }
  public putLink2(value: ExpressRoutePortLink2) {
    this._link2.internalValue = value;
  }
  public resetLink2() {
    this._link2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get link2Input() {
    return this._link2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressRoutePortTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressRoutePortTimeouts) {
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
      bandwidth_in_gbps: cdktf.numberToTerraform(this._bandwidthInGbps),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      peering_location: cdktf.stringToTerraform(this._peeringLocation),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: expressRoutePortIdentityToTerraform(this._identity.internalValue),
      link1: expressRoutePortLink1ToTerraform(this._link1.internalValue),
      link2: expressRoutePortLink2ToTerraform(this._link2.internalValue),
      timeouts: expressRoutePortTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
