// https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabServicePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}
  */
  readonly allowedRegions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}
  */
  readonly defaultNetworkSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#id LabServicePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#location LabServicePlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#name LabServicePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}
  */
  readonly sharedGalleryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#tags LabServicePlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * default_auto_shutdown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}
  */
  readonly defaultAutoShutdown?: LabServicePlanDefaultAutoShutdown;
  /**
  * default_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}
  */
  readonly defaultConnection?: LabServicePlanDefaultConnection;
  /**
  * support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#support LabServicePlan#support}
  */
  readonly support?: LabServicePlanSupport;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}
  */
  readonly timeouts?: LabServicePlanTimeouts;
}
export interface LabServicePlanDefaultAutoShutdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}
  */
  readonly disconnectDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}
  */
  readonly idleDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}
  */
  readonly noConnectDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}
  */
  readonly shutdownOnIdle?: string;
}

export function labServicePlanDefaultAutoShutdownToTerraform(struct?: LabServicePlanDefaultAutoShutdownOutputReference | LabServicePlanDefaultAutoShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disconnect_delay: cdktf.stringToTerraform(struct!.disconnectDelay),
    idle_delay: cdktf.stringToTerraform(struct!.idleDelay),
    no_connect_delay: cdktf.stringToTerraform(struct!.noConnectDelay),
    shutdown_on_idle: cdktf.stringToTerraform(struct!.shutdownOnIdle),
  }
}


export function labServicePlanDefaultAutoShutdownToHclTerraform(struct?: LabServicePlanDefaultAutoShutdownOutputReference | LabServicePlanDefaultAutoShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disconnect_delay: {
      value: cdktf.stringToHclTerraform(struct!.disconnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_delay: {
      value: cdktf.stringToHclTerraform(struct!.idleDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_connect_delay: {
      value: cdktf.stringToHclTerraform(struct!.noConnectDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown_on_idle: {
      value: cdktf.stringToHclTerraform(struct!.shutdownOnIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServicePlanDefaultAutoShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServicePlanDefaultAutoShutdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disconnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectDelay = this._disconnectDelay;
    }
    if (this._idleDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDelay = this._idleDelay;
    }
    if (this._noConnectDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noConnectDelay = this._noConnectDelay;
    }
    if (this._shutdownOnIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownOnIdle = this._shutdownOnIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServicePlanDefaultAutoShutdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disconnectDelay = undefined;
      this._idleDelay = undefined;
      this._noConnectDelay = undefined;
      this._shutdownOnIdle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disconnectDelay = value.disconnectDelay;
      this._idleDelay = value.idleDelay;
      this._noConnectDelay = value.noConnectDelay;
      this._shutdownOnIdle = value.shutdownOnIdle;
    }
  }

  // disconnect_delay - computed: false, optional: true, required: false
  private _disconnectDelay?: string; 
  public get disconnectDelay() {
    return this.getStringAttribute('disconnect_delay');
  }
  public set disconnectDelay(value: string) {
    this._disconnectDelay = value;
  }
  public resetDisconnectDelay() {
    this._disconnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectDelayInput() {
    return this._disconnectDelay;
  }

  // idle_delay - computed: false, optional: true, required: false
  private _idleDelay?: string; 
  public get idleDelay() {
    return this.getStringAttribute('idle_delay');
  }
  public set idleDelay(value: string) {
    this._idleDelay = value;
  }
  public resetIdleDelay() {
    this._idleDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDelayInput() {
    return this._idleDelay;
  }

  // no_connect_delay - computed: false, optional: true, required: false
  private _noConnectDelay?: string; 
  public get noConnectDelay() {
    return this.getStringAttribute('no_connect_delay');
  }
  public set noConnectDelay(value: string) {
    this._noConnectDelay = value;
  }
  public resetNoConnectDelay() {
    this._noConnectDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noConnectDelayInput() {
    return this._noConnectDelay;
  }

  // shutdown_on_idle - computed: false, optional: true, required: false
  private _shutdownOnIdle?: string; 
  public get shutdownOnIdle() {
    return this.getStringAttribute('shutdown_on_idle');
  }
  public set shutdownOnIdle(value: string) {
    this._shutdownOnIdle = value;
  }
  public resetShutdownOnIdle() {
    this._shutdownOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownOnIdleInput() {
    return this._shutdownOnIdle;
  }
}
export interface LabServicePlanDefaultConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}
  */
  readonly clientRdpAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}
  */
  readonly clientSshAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}
  */
  readonly webRdpAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}
  */
  readonly webSshAccess?: string;
}

export function labServicePlanDefaultConnectionToTerraform(struct?: LabServicePlanDefaultConnectionOutputReference | LabServicePlanDefaultConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_rdp_access: cdktf.stringToTerraform(struct!.clientRdpAccess),
    client_ssh_access: cdktf.stringToTerraform(struct!.clientSshAccess),
    web_rdp_access: cdktf.stringToTerraform(struct!.webRdpAccess),
    web_ssh_access: cdktf.stringToTerraform(struct!.webSshAccess),
  }
}


export function labServicePlanDefaultConnectionToHclTerraform(struct?: LabServicePlanDefaultConnectionOutputReference | LabServicePlanDefaultConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_rdp_access: {
      value: cdktf.stringToHclTerraform(struct!.clientRdpAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ssh_access: {
      value: cdktf.stringToHclTerraform(struct!.clientSshAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_rdp_access: {
      value: cdktf.stringToHclTerraform(struct!.webRdpAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_ssh_access: {
      value: cdktf.stringToHclTerraform(struct!.webSshAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServicePlanDefaultConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServicePlanDefaultConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRdpAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRdpAccess = this._clientRdpAccess;
    }
    if (this._clientSshAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSshAccess = this._clientSshAccess;
    }
    if (this._webRdpAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.webRdpAccess = this._webRdpAccess;
    }
    if (this._webSshAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSshAccess = this._webSshAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServicePlanDefaultConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientRdpAccess = undefined;
      this._clientSshAccess = undefined;
      this._webRdpAccess = undefined;
      this._webSshAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientRdpAccess = value.clientRdpAccess;
      this._clientSshAccess = value.clientSshAccess;
      this._webRdpAccess = value.webRdpAccess;
      this._webSshAccess = value.webSshAccess;
    }
  }

  // client_rdp_access - computed: false, optional: true, required: false
  private _clientRdpAccess?: string; 
  public get clientRdpAccess() {
    return this.getStringAttribute('client_rdp_access');
  }
  public set clientRdpAccess(value: string) {
    this._clientRdpAccess = value;
  }
  public resetClientRdpAccess() {
    this._clientRdpAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRdpAccessInput() {
    return this._clientRdpAccess;
  }

  // client_ssh_access - computed: false, optional: true, required: false
  private _clientSshAccess?: string; 
  public get clientSshAccess() {
    return this.getStringAttribute('client_ssh_access');
  }
  public set clientSshAccess(value: string) {
    this._clientSshAccess = value;
  }
  public resetClientSshAccess() {
    this._clientSshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSshAccessInput() {
    return this._clientSshAccess;
  }

  // web_rdp_access - computed: false, optional: true, required: false
  private _webRdpAccess?: string; 
  public get webRdpAccess() {
    return this.getStringAttribute('web_rdp_access');
  }
  public set webRdpAccess(value: string) {
    this._webRdpAccess = value;
  }
  public resetWebRdpAccess() {
    this._webRdpAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRdpAccessInput() {
    return this._webRdpAccess;
  }

  // web_ssh_access - computed: false, optional: true, required: false
  private _webSshAccess?: string; 
  public get webSshAccess() {
    return this.getStringAttribute('web_ssh_access');
  }
  public set webSshAccess(value: string) {
    this._webSshAccess = value;
  }
  public resetWebSshAccess() {
    this._webSshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSshAccessInput() {
    return this._webSshAccess;
  }
}
export interface LabServicePlanSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#email LabServicePlan#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}
  */
  readonly instructions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#phone LabServicePlan#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#url LabServicePlan#url}
  */
  readonly url?: string;
}

export function labServicePlanSupportToTerraform(struct?: LabServicePlanSupportOutputReference | LabServicePlanSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    instructions: cdktf.stringToTerraform(struct!.instructions),
    phone: cdktf.stringToTerraform(struct!.phone),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function labServicePlanSupportToHclTerraform(struct?: LabServicePlanSupportOutputReference | LabServicePlanSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LabServicePlanSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LabServicePlanSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LabServicePlanSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._instructions = undefined;
      this._phone = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._instructions = value.instructions;
      this._phone = value.phone;
      this._url = value.url;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface LabServicePlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#create LabServicePlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#delete LabServicePlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#read LabServicePlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#update LabServicePlan#update}
  */
  readonly update?: string;
}

export function labServicePlanTimeoutsToTerraform(struct?: LabServicePlanTimeouts | cdktf.IResolvable): any {
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


export function labServicePlanTimeoutsToHclTerraform(struct?: LabServicePlanTimeouts | cdktf.IResolvable): any {
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

export class LabServicePlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LabServicePlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LabServicePlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan azurerm_lab_service_plan}
*/
export class LabServicePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_lab_service_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LabServicePlan to import
  * @param importFromId The id of the existing LabServicePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LabServicePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_lab_service_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lab_service_plan azurerm_lab_service_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabServicePlanConfig
  */
  public constructor(scope: Construct, id: string, config: LabServicePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lab_service_plan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.97.1',
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
    this._allowedRegions = config.allowedRegions;
    this._defaultNetworkSubnetId = config.defaultNetworkSubnetId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedGalleryId = config.sharedGalleryId;
    this._tags = config.tags;
    this._defaultAutoShutdown.internalValue = config.defaultAutoShutdown;
    this._defaultConnection.internalValue = config.defaultConnection;
    this._support.internalValue = config.support;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_regions - computed: false, optional: false, required: true
  private _allowedRegions?: string[]; 
  public get allowedRegions() {
    return this.getListAttribute('allowed_regions');
  }
  public set allowedRegions(value: string[]) {
    this._allowedRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegionsInput() {
    return this._allowedRegions;
  }

  // default_network_subnet_id - computed: false, optional: true, required: false
  private _defaultNetworkSubnetId?: string; 
  public get defaultNetworkSubnetId() {
    return this.getStringAttribute('default_network_subnet_id');
  }
  public set defaultNetworkSubnetId(value: string) {
    this._defaultNetworkSubnetId = value;
  }
  public resetDefaultNetworkSubnetId() {
    this._defaultNetworkSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkSubnetIdInput() {
    return this._defaultNetworkSubnetId;
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

  // shared_gallery_id - computed: false, optional: true, required: false
  private _sharedGalleryId?: string; 
  public get sharedGalleryId() {
    return this.getStringAttribute('shared_gallery_id');
  }
  public set sharedGalleryId(value: string) {
    this._sharedGalleryId = value;
  }
  public resetSharedGalleryId() {
    this._sharedGalleryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedGalleryIdInput() {
    return this._sharedGalleryId;
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

  // default_auto_shutdown - computed: false, optional: true, required: false
  private _defaultAutoShutdown = new LabServicePlanDefaultAutoShutdownOutputReference(this, "default_auto_shutdown");
  public get defaultAutoShutdown() {
    return this._defaultAutoShutdown;
  }
  public putDefaultAutoShutdown(value: LabServicePlanDefaultAutoShutdown) {
    this._defaultAutoShutdown.internalValue = value;
  }
  public resetDefaultAutoShutdown() {
    this._defaultAutoShutdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAutoShutdownInput() {
    return this._defaultAutoShutdown.internalValue;
  }

  // default_connection - computed: false, optional: true, required: false
  private _defaultConnection = new LabServicePlanDefaultConnectionOutputReference(this, "default_connection");
  public get defaultConnection() {
    return this._defaultConnection;
  }
  public putDefaultConnection(value: LabServicePlanDefaultConnection) {
    this._defaultConnection.internalValue = value;
  }
  public resetDefaultConnection() {
    this._defaultConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnectionInput() {
    return this._defaultConnection.internalValue;
  }

  // support - computed: false, optional: true, required: false
  private _support = new LabServicePlanSupportOutputReference(this, "support");
  public get support() {
    return this._support;
  }
  public putSupport(value: LabServicePlanSupport) {
    this._support.internalValue = value;
  }
  public resetSupport() {
    this._support.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LabServicePlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LabServicePlanTimeouts) {
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
      allowed_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRegions),
      default_network_subnet_id: cdktf.stringToTerraform(this._defaultNetworkSubnetId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shared_gallery_id: cdktf.stringToTerraform(this._sharedGalleryId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      default_auto_shutdown: labServicePlanDefaultAutoShutdownToTerraform(this._defaultAutoShutdown.internalValue),
      default_connection: labServicePlanDefaultConnectionToTerraform(this._defaultConnection.internalValue),
      support: labServicePlanSupportToTerraform(this._support.internalValue),
      timeouts: labServicePlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_network_subnet_id: {
        value: cdktf.stringToHclTerraform(this._defaultNetworkSubnetId),
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
      shared_gallery_id: {
        value: cdktf.stringToHclTerraform(this._sharedGalleryId),
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
      default_auto_shutdown: {
        value: labServicePlanDefaultAutoShutdownToHclTerraform(this._defaultAutoShutdown.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServicePlanDefaultAutoShutdownList",
      },
      default_connection: {
        value: labServicePlanDefaultConnectionToHclTerraform(this._defaultConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServicePlanDefaultConnectionList",
      },
      support: {
        value: labServicePlanSupportToHclTerraform(this._support.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LabServicePlanSupportList",
      },
      timeouts: {
        value: labServicePlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LabServicePlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
