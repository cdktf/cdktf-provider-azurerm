// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}
  */
  readonly automaticallyRotateKeyToLatestEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}
  */
  readonly cacheSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#id HpcCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#location HpcCache#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#mtu HpcCache#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#name HpcCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}
  */
  readonly ntpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#tags HpcCache#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * default_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}
  */
  readonly defaultAccessPolicy?: HpcCacheDefaultAccessPolicy;
  /**
  * directory_active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}
  */
  readonly directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory;
  /**
  * directory_flat_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}
  */
  readonly directoryFlatFile?: HpcCacheDirectoryFlatFile;
  /**
  * directory_ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}
  */
  readonly directoryLdap?: HpcCacheDirectoryLdap;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#dns HpcCache#dns}
  */
  readonly dns?: HpcCacheDns;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#identity HpcCache#identity}
  */
  readonly identity?: HpcCacheIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}
  */
  readonly timeouts?: HpcCacheTimeouts;
}
export interface HpcCacheDefaultAccessPolicyAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#access HpcCache#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}
  */
  readonly anonymousGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}
  */
  readonly anonymousUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#filter HpcCache#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#scope HpcCache#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}
  */
  readonly submountAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}
  */
  readonly suidEnabled?: boolean | cdktf.IResolvable;
}

export function hpcCacheDefaultAccessPolicyAccessRuleToTerraform(struct?: HpcCacheDefaultAccessPolicyAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}


export function hpcCacheDefaultAccessPolicyAccessRuleToHclTerraform(struct?: HpcCacheDefaultAccessPolicyAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anonymous_gid: {
      value: cdktf.numberToHclTerraform(struct!.anonymousGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anonymous_uid: {
      value: cdktf.numberToHclTerraform(struct!.anonymousUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_squash_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rootSquashEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submount_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.submountAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suid_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.suidEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDefaultAccessPolicyAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HpcCacheDefaultAccessPolicyAccessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._anonymousGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousGid = this._anonymousGid;
    }
    if (this._anonymousUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousUid = this._anonymousUid;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._rootSquashEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSquashEnabled = this._rootSquashEnabled;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._submountAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.submountAccessEnabled = this._submountAccessEnabled;
    }
    if (this._suidEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.suidEnabled = this._suidEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDefaultAccessPolicyAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._anonymousGid = undefined;
      this._anonymousUid = undefined;
      this._filter = undefined;
      this._rootSquashEnabled = undefined;
      this._scope = undefined;
      this._submountAccessEnabled = undefined;
      this._suidEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._anonymousGid = value.anonymousGid;
      this._anonymousUid = value.anonymousUid;
      this._filter = value.filter;
      this._rootSquashEnabled = value.rootSquashEnabled;
      this._scope = value.scope;
      this._submountAccessEnabled = value.submountAccessEnabled;
      this._suidEnabled = value.suidEnabled;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // anonymous_gid - computed: false, optional: true, required: false
  private _anonymousGid?: number; 
  public get anonymousGid() {
    return this.getNumberAttribute('anonymous_gid');
  }
  public set anonymousGid(value: number) {
    this._anonymousGid = value;
  }
  public resetAnonymousGid() {
    this._anonymousGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousGidInput() {
    return this._anonymousGid;
  }

  // anonymous_uid - computed: false, optional: true, required: false
  private _anonymousUid?: number; 
  public get anonymousUid() {
    return this.getNumberAttribute('anonymous_uid');
  }
  public set anonymousUid(value: number) {
    this._anonymousUid = value;
  }
  public resetAnonymousUid() {
    this._anonymousUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUidInput() {
    return this._anonymousUid;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // root_squash_enabled - computed: false, optional: true, required: false
  private _rootSquashEnabled?: boolean | cdktf.IResolvable; 
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled');
  }
  public set rootSquashEnabled(value: boolean | cdktf.IResolvable) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // submount_access_enabled - computed: false, optional: true, required: false
  private _submountAccessEnabled?: boolean | cdktf.IResolvable; 
  public get submountAccessEnabled() {
    return this.getBooleanAttribute('submount_access_enabled');
  }
  public set submountAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._submountAccessEnabled = value;
  }
  public resetSubmountAccessEnabled() {
    this._submountAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submountAccessEnabledInput() {
    return this._submountAccessEnabled;
  }

  // suid_enabled - computed: false, optional: true, required: false
  private _suidEnabled?: boolean | cdktf.IResolvable; 
  public get suidEnabled() {
    return this.getBooleanAttribute('suid_enabled');
  }
  public set suidEnabled(value: boolean | cdktf.IResolvable) {
    this._suidEnabled = value;
  }
  public resetSuidEnabled() {
    this._suidEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suidEnabledInput() {
    return this._suidEnabled;
  }
}

export class HpcCacheDefaultAccessPolicyAccessRuleList extends cdktf.ComplexList {
  public internalValue? : HpcCacheDefaultAccessPolicyAccessRule[] | cdktf.IResolvable

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
  public get(index: number): HpcCacheDefaultAccessPolicyAccessRuleOutputReference {
    return new HpcCacheDefaultAccessPolicyAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HpcCacheDefaultAccessPolicy {
  /**
  * access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}
  */
  readonly accessRule: HpcCacheDefaultAccessPolicyAccessRule[] | cdktf.IResolvable;
}

export function hpcCacheDefaultAccessPolicyToTerraform(struct?: HpcCacheDefaultAccessPolicyOutputReference | HpcCacheDefaultAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_rule: cdktf.listMapper(hpcCacheDefaultAccessPolicyAccessRuleToTerraform, true)(struct!.accessRule),
  }
}


export function hpcCacheDefaultAccessPolicyToHclTerraform(struct?: HpcCacheDefaultAccessPolicyOutputReference | HpcCacheDefaultAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_rule: {
      value: cdktf.listMapperHcl(hpcCacheDefaultAccessPolicyAccessRuleToHclTerraform, true)(struct!.accessRule),
      isBlock: true,
      type: "set",
      storageClassType: "HpcCacheDefaultAccessPolicyAccessRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDefaultAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDefaultAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRule = this._accessRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDefaultAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRule.internalValue = value.accessRule;
    }
  }

  // access_rule - computed: false, optional: false, required: true
  private _accessRule = new HpcCacheDefaultAccessPolicyAccessRuleList(this, "access_rule", true);
  public get accessRule() {
    return this._accessRule;
  }
  public putAccessRule(value: HpcCacheDefaultAccessPolicyAccessRule[] | cdktf.IResolvable) {
    this._accessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule.internalValue;
  }
}
export interface HpcCacheDirectoryActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}
  */
  readonly cacheNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}
  */
  readonly dnsPrimaryIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}
  */
  readonly dnsSecondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}
  */
  readonly domainNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#password HpcCache#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#username HpcCache#username}
  */
  readonly username: string;
}

export function hpcCacheDirectoryActiveDirectoryToTerraform(struct?: HpcCacheDirectoryActiveDirectoryOutputReference | HpcCacheDirectoryActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_netbios_name: cdktf.stringToTerraform(struct!.cacheNetbiosName),
    dns_primary_ip: cdktf.stringToTerraform(struct!.dnsPrimaryIp),
    dns_secondary_ip: cdktf.stringToTerraform(struct!.dnsSecondaryIp),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_netbios_name: cdktf.stringToTerraform(struct!.domainNetbiosName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hpcCacheDirectoryActiveDirectoryToHclTerraform(struct?: HpcCacheDirectoryActiveDirectoryOutputReference | HpcCacheDirectoryActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_netbios_name: {
      value: cdktf.stringToHclTerraform(struct!.cacheNetbiosName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_primary_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsPrimaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_secondary_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsSecondaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_netbios_name: {
      value: cdktf.stringToHclTerraform(struct!.domainNetbiosName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDirectoryActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDirectoryActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheNetbiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNetbiosName = this._cacheNetbiosName;
    }
    if (this._dnsPrimaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimaryIp = this._dnsPrimaryIp;
    }
    if (this._dnsSecondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondaryIp = this._dnsSecondaryIp;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNetbiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNetbiosName = this._domainNetbiosName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheNetbiosName = undefined;
      this._dnsPrimaryIp = undefined;
      this._dnsSecondaryIp = undefined;
      this._domainName = undefined;
      this._domainNetbiosName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheNetbiosName = value.cacheNetbiosName;
      this._dnsPrimaryIp = value.dnsPrimaryIp;
      this._dnsSecondaryIp = value.dnsSecondaryIp;
      this._domainName = value.domainName;
      this._domainNetbiosName = value.domainNetbiosName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // cache_netbios_name - computed: false, optional: false, required: true
  private _cacheNetbiosName?: string; 
  public get cacheNetbiosName() {
    return this.getStringAttribute('cache_netbios_name');
  }
  public set cacheNetbiosName(value: string) {
    this._cacheNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNetbiosNameInput() {
    return this._cacheNetbiosName;
  }

  // dns_primary_ip - computed: false, optional: false, required: true
  private _dnsPrimaryIp?: string; 
  public get dnsPrimaryIp() {
    return this.getStringAttribute('dns_primary_ip');
  }
  public set dnsPrimaryIp(value: string) {
    this._dnsPrimaryIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryIpInput() {
    return this._dnsPrimaryIp;
  }

  // dns_secondary_ip - computed: false, optional: true, required: false
  private _dnsSecondaryIp?: string; 
  public get dnsSecondaryIp() {
    return this.getStringAttribute('dns_secondary_ip');
  }
  public set dnsSecondaryIp(value: string) {
    this._dnsSecondaryIp = value;
  }
  public resetDnsSecondaryIp() {
    this._dnsSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryIpInput() {
    return this._dnsSecondaryIp;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_netbios_name - computed: false, optional: false, required: true
  private _domainNetbiosName?: string; 
  public get domainNetbiosName() {
    return this.getStringAttribute('domain_netbios_name');
  }
  public set domainNetbiosName(value: string) {
    this._domainNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNetbiosNameInput() {
    return this._domainNetbiosName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface HpcCacheDirectoryFlatFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}
  */
  readonly groupFileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}
  */
  readonly passwordFileUri: string;
}

export function hpcCacheDirectoryFlatFileToTerraform(struct?: HpcCacheDirectoryFlatFileOutputReference | HpcCacheDirectoryFlatFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_file_uri: cdktf.stringToTerraform(struct!.groupFileUri),
    password_file_uri: cdktf.stringToTerraform(struct!.passwordFileUri),
  }
}


export function hpcCacheDirectoryFlatFileToHclTerraform(struct?: HpcCacheDirectoryFlatFileOutputReference | HpcCacheDirectoryFlatFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.groupFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.passwordFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDirectoryFlatFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDirectoryFlatFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFileUri = this._groupFileUri;
    }
    if (this._passwordFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFileUri = this._passwordFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryFlatFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupFileUri = undefined;
      this._passwordFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupFileUri = value.groupFileUri;
      this._passwordFileUri = value.passwordFileUri;
    }
  }

  // group_file_uri - computed: false, optional: false, required: true
  private _groupFileUri?: string; 
  public get groupFileUri() {
    return this.getStringAttribute('group_file_uri');
  }
  public set groupFileUri(value: string) {
    this._groupFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFileUriInput() {
    return this._groupFileUri;
  }

  // password_file_uri - computed: false, optional: false, required: true
  private _passwordFileUri?: string; 
  public get passwordFileUri() {
    return this.getStringAttribute('password_file_uri');
  }
  public set passwordFileUri(value: string) {
    this._passwordFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileUriInput() {
    return this._passwordFileUri;
  }
}
export interface HpcCacheDirectoryLdapBind {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#dn HpcCache#dn}
  */
  readonly dn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#password HpcCache#password}
  */
  readonly password: string;
}

export function hpcCacheDirectoryLdapBindToTerraform(struct?: HpcCacheDirectoryLdapBindOutputReference | HpcCacheDirectoryLdapBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function hpcCacheDirectoryLdapBindToHclTerraform(struct?: HpcCacheDirectoryLdapBindOutputReference | HpcCacheDirectoryLdapBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dn: {
      value: cdktf.stringToHclTerraform(struct!.dn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDirectoryLdapBindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDirectoryLdapBind | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dn = this._dn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryLdapBind | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dn = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dn = value.dn;
      this._password = value.password;
    }
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface HpcCacheDirectoryLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}
  */
  readonly certificateValidationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}
  */
  readonly downloadCertificateAutomatically?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#server HpcCache#server}
  */
  readonly server: string;
  /**
  * bind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#bind HpcCache#bind}
  */
  readonly bind?: HpcCacheDirectoryLdapBind;
}

export function hpcCacheDirectoryLdapToTerraform(struct?: HpcCacheDirectoryLdapOutputReference | HpcCacheDirectoryLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    certificate_validation_uri: cdktf.stringToTerraform(struct!.certificateValidationUri),
    download_certificate_automatically: cdktf.booleanToTerraform(struct!.downloadCertificateAutomatically),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    server: cdktf.stringToTerraform(struct!.server),
    bind: hpcCacheDirectoryLdapBindToTerraform(struct!.bind),
  }
}


export function hpcCacheDirectoryLdapToHclTerraform(struct?: HpcCacheDirectoryLdapOutputReference | HpcCacheDirectoryLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_validation_uri: {
      value: cdktf.stringToHclTerraform(struct!.certificateValidationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_certificate_automatically: {
      value: cdktf.booleanToHclTerraform(struct!.downloadCertificateAutomatically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind: {
      value: hpcCacheDirectoryLdapBindToHclTerraform(struct!.bind),
      isBlock: true,
      type: "list",
      storageClassType: "HpcCacheDirectoryLdapBindList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDirectoryLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDirectoryLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._certificateValidationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidationUri = this._certificateValidationUri;
    }
    if (this._downloadCertificateAutomatically !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadCertificateAutomatically = this._downloadCertificateAutomatically;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._bind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseDn = undefined;
      this._certificateValidationUri = undefined;
      this._downloadCertificateAutomatically = undefined;
      this._encrypted = undefined;
      this._server = undefined;
      this._bind.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseDn = value.baseDn;
      this._certificateValidationUri = value.certificateValidationUri;
      this._downloadCertificateAutomatically = value.downloadCertificateAutomatically;
      this._encrypted = value.encrypted;
      this._server = value.server;
      this._bind.internalValue = value.bind;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // certificate_validation_uri - computed: false, optional: true, required: false
  private _certificateValidationUri?: string; 
  public get certificateValidationUri() {
    return this.getStringAttribute('certificate_validation_uri');
  }
  public set certificateValidationUri(value: string) {
    this._certificateValidationUri = value;
  }
  public resetCertificateValidationUri() {
    this._certificateValidationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationUriInput() {
    return this._certificateValidationUri;
  }

  // download_certificate_automatically - computed: false, optional: true, required: false
  private _downloadCertificateAutomatically?: boolean | cdktf.IResolvable; 
  public get downloadCertificateAutomatically() {
    return this.getBooleanAttribute('download_certificate_automatically');
  }
  public set downloadCertificateAutomatically(value: boolean | cdktf.IResolvable) {
    this._downloadCertificateAutomatically = value;
  }
  public resetDownloadCertificateAutomatically() {
    this._downloadCertificateAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCertificateAutomaticallyInput() {
    return this._downloadCertificateAutomatically;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // bind - computed: false, optional: true, required: false
  private _bind = new HpcCacheDirectoryLdapBindOutputReference(this, "bind");
  public get bind() {
    return this._bind;
  }
  public putBind(value: HpcCacheDirectoryLdapBind) {
    this._bind.internalValue = value;
  }
  public resetBind() {
    this._bind.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind.internalValue;
  }
}
export interface HpcCacheDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#servers HpcCache#servers}
  */
  readonly servers: string[];
}

export function hpcCacheDnsToTerraform(struct?: HpcCacheDnsOutputReference | HpcCacheDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_domain: cdktf.stringToTerraform(struct!.searchDomain),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function hpcCacheDnsToHclTerraform(struct?: HpcCacheDnsOutputReference | HpcCacheDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_domain: {
      value: cdktf.stringToHclTerraform(struct!.searchDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HpcCacheDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomain = this._searchDomain;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchDomain = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchDomain = value.searchDomain;
      this._servers = value.servers;
    }
  }

  // search_domain - computed: false, optional: true, required: false
  private _searchDomain?: string; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface HpcCacheIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#type HpcCache#type}
  */
  readonly type: string;
}

export function hpcCacheIdentityToTerraform(struct?: HpcCacheIdentityOutputReference | HpcCacheIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hpcCacheIdentityToHclTerraform(struct?: HpcCacheIdentityOutputReference | HpcCacheIdentity): any {
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

export class HpcCacheIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HpcCacheIdentity | undefined {
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

  public set internalValue(value: HpcCacheIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface HpcCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#create HpcCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#delete HpcCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#read HpcCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#update HpcCache#update}
  */
  readonly update?: string;
}

export function hpcCacheTimeoutsToTerraform(struct?: HpcCacheTimeouts | cdktf.IResolvable): any {
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


export function hpcCacheTimeoutsToHclTerraform(struct?: HpcCacheTimeouts | cdktf.IResolvable): any {
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

export class HpcCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HpcCacheTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HpcCacheTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache azurerm_hpc_cache}
*/
export class HpcCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_hpc_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HpcCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HpcCache to import
  * @param importFromId The id of the existing HpcCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HpcCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_hpc_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/hpc_cache azurerm_hpc_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache',
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
    this._automaticallyRotateKeyToLatestEnabled = config.automaticallyRotateKeyToLatestEnabled;
    this._cacheSizeInGb = config.cacheSizeInGb;
    this._id = config.id;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._location = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ntpServer = config.ntpServer;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._defaultAccessPolicy.internalValue = config.defaultAccessPolicy;
    this._directoryActiveDirectory.internalValue = config.directoryActiveDirectory;
    this._directoryFlatFile.internalValue = config.directoryFlatFile;
    this._directoryLdap.internalValue = config.directoryLdap;
    this._dns.internalValue = config.dns;
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatically_rotate_key_to_latest_enabled - computed: false, optional: true, required: false
  private _automaticallyRotateKeyToLatestEnabled?: boolean | cdktf.IResolvable; 
  public get automaticallyRotateKeyToLatestEnabled() {
    return this.getBooleanAttribute('automatically_rotate_key_to_latest_enabled');
  }
  public set automaticallyRotateKeyToLatestEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticallyRotateKeyToLatestEnabled = value;
  }
  public resetAutomaticallyRotateKeyToLatestEnabled() {
    this._automaticallyRotateKeyToLatestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyRotateKeyToLatestEnabledInput() {
    return this._automaticallyRotateKeyToLatestEnabled;
  }

  // cache_size_in_gb - computed: false, optional: false, required: true
  private _cacheSizeInGb?: number; 
  public get cacheSizeInGb() {
    return this.getNumberAttribute('cache_size_in_gb');
  }
  public set cacheSizeInGb(value: number) {
    this._cacheSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInGbInput() {
    return this._cacheSizeInGb;
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

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
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

  // mount_addresses - computed: true, optional: false, required: false
  public get mountAddresses() {
    return this.getListAttribute('mount_addresses');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // ntp_server - computed: false, optional: true, required: false
  private _ntpServer?: string; 
  public get ntpServer() {
    return this.getStringAttribute('ntp_server');
  }
  public set ntpServer(value: string) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // default_access_policy - computed: false, optional: true, required: false
  private _defaultAccessPolicy = new HpcCacheDefaultAccessPolicyOutputReference(this, "default_access_policy");
  public get defaultAccessPolicy() {
    return this._defaultAccessPolicy;
  }
  public putDefaultAccessPolicy(value: HpcCacheDefaultAccessPolicy) {
    this._defaultAccessPolicy.internalValue = value;
  }
  public resetDefaultAccessPolicy() {
    this._defaultAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessPolicyInput() {
    return this._defaultAccessPolicy.internalValue;
  }

  // directory_active_directory - computed: false, optional: true, required: false
  private _directoryActiveDirectory = new HpcCacheDirectoryActiveDirectoryOutputReference(this, "directory_active_directory");
  public get directoryActiveDirectory() {
    return this._directoryActiveDirectory;
  }
  public putDirectoryActiveDirectory(value: HpcCacheDirectoryActiveDirectory) {
    this._directoryActiveDirectory.internalValue = value;
  }
  public resetDirectoryActiveDirectory() {
    this._directoryActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryActiveDirectoryInput() {
    return this._directoryActiveDirectory.internalValue;
  }

  // directory_flat_file - computed: false, optional: true, required: false
  private _directoryFlatFile = new HpcCacheDirectoryFlatFileOutputReference(this, "directory_flat_file");
  public get directoryFlatFile() {
    return this._directoryFlatFile;
  }
  public putDirectoryFlatFile(value: HpcCacheDirectoryFlatFile) {
    this._directoryFlatFile.internalValue = value;
  }
  public resetDirectoryFlatFile() {
    this._directoryFlatFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryFlatFileInput() {
    return this._directoryFlatFile.internalValue;
  }

  // directory_ldap - computed: false, optional: true, required: false
  private _directoryLdap = new HpcCacheDirectoryLdapOutputReference(this, "directory_ldap");
  public get directoryLdap() {
    return this._directoryLdap;
  }
  public putDirectoryLdap(value: HpcCacheDirectoryLdap) {
    this._directoryLdap.internalValue = value;
  }
  public resetDirectoryLdap() {
    this._directoryLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryLdapInput() {
    return this._directoryLdap.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new HpcCacheDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: HpcCacheDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new HpcCacheIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: HpcCacheIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcCacheTimeouts) {
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
      automatically_rotate_key_to_latest_enabled: cdktf.booleanToTerraform(this._automaticallyRotateKeyToLatestEnabled),
      cache_size_in_gb: cdktf.numberToTerraform(this._cacheSizeInGb),
      id: cdktf.stringToTerraform(this._id),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      location: cdktf.stringToTerraform(this._location),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ntp_server: cdktf.stringToTerraform(this._ntpServer),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      default_access_policy: hpcCacheDefaultAccessPolicyToTerraform(this._defaultAccessPolicy.internalValue),
      directory_active_directory: hpcCacheDirectoryActiveDirectoryToTerraform(this._directoryActiveDirectory.internalValue),
      directory_flat_file: hpcCacheDirectoryFlatFileToTerraform(this._directoryFlatFile.internalValue),
      directory_ldap: hpcCacheDirectoryLdapToTerraform(this._directoryLdap.internalValue),
      dns: hpcCacheDnsToTerraform(this._dns.internalValue),
      identity: hpcCacheIdentityToTerraform(this._identity.internalValue),
      timeouts: hpcCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatically_rotate_key_to_latest_enabled: {
        value: cdktf.booleanToHclTerraform(this._automaticallyRotateKeyToLatestEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._cacheSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_key_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultKeyId),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server: {
        value: cdktf.stringToHclTerraform(this._ntpServer),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      default_access_policy: {
        value: hpcCacheDefaultAccessPolicyToHclTerraform(this._defaultAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheDefaultAccessPolicyList",
      },
      directory_active_directory: {
        value: hpcCacheDirectoryActiveDirectoryToHclTerraform(this._directoryActiveDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheDirectoryActiveDirectoryList",
      },
      directory_flat_file: {
        value: hpcCacheDirectoryFlatFileToHclTerraform(this._directoryFlatFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheDirectoryFlatFileList",
      },
      directory_ldap: {
        value: hpcCacheDirectoryLdapToHclTerraform(this._directoryLdap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheDirectoryLdapList",
      },
      dns: {
        value: hpcCacheDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheDnsList",
      },
      identity: {
        value: hpcCacheIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HpcCacheIdentityList",
      },
      timeouts: {
        value: hpcCacheTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HpcCacheTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
