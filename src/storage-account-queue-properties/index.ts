/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountQueuePropertiesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}
  */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRuleA[] | cdktf.IResolvable;
  /**
  * hour_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}
  */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetricsA;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}
  */
  readonly logging?: StorageAccountQueuePropertiesLoggingA;
  /**
  * minute_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}
  */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetricsA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}
  */
  readonly timeouts?: StorageAccountQueuePropertiesTimeouts;
}
export interface StorageAccountQueuePropertiesCorsRuleA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountQueuePropertiesCorsRuleAToTerraform(struct?: StorageAccountQueuePropertiesCorsRuleA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function storageAccountQueuePropertiesCorsRuleAToHclTerraform(struct?: StorageAccountQueuePropertiesCorsRuleA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesCorsRuleAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageAccountQueuePropertiesCorsRuleA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesCorsRuleA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}

export class StorageAccountQueuePropertiesCorsRuleAList extends cdktf.ComplexList {
  public internalValue? : StorageAccountQueuePropertiesCorsRuleA[] | cdktf.IResolvable

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
  public get(index: number): StorageAccountQueuePropertiesCorsRuleAOutputReference {
    return new StorageAccountQueuePropertiesCorsRuleAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountQueuePropertiesHourMetricsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesHourMetricsAToTerraform(struct?: StorageAccountQueuePropertiesHourMetricsAOutputReference | StorageAccountQueuePropertiesHourMetricsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesHourMetricsAToHclTerraform(struct?: StorageAccountQueuePropertiesHourMetricsAOutputReference | StorageAccountQueuePropertiesHourMetricsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_apis: {
      value: cdktf.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesHourMetricsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesHourMetricsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesHourMetricsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueuePropertiesLoggingA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}
  */
  readonly delete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}
  */
  readonly read: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}
  */
  readonly write: boolean | cdktf.IResolvable;
}

export function storageAccountQueuePropertiesLoggingAToTerraform(struct?: StorageAccountQueuePropertiesLoggingAOutputReference | StorageAccountQueuePropertiesLoggingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.booleanToTerraform(struct!.delete),
    read: cdktf.booleanToTerraform(struct!.read),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
    write: cdktf.booleanToTerraform(struct!.write),
  }
}


export function storageAccountQueuePropertiesLoggingAToHclTerraform(struct?: StorageAccountQueuePropertiesLoggingAOutputReference | StorageAccountQueuePropertiesLoggingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktf.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesLoggingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesLoggingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesLoggingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._read = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._read = value.read;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
      this._write = value.write;
    }
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface StorageAccountQueuePropertiesMinuteMetricsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}
  */
  readonly includeApis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesMinuteMetricsAToTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsAOutputReference | StorageAccountQueuePropertiesMinuteMetricsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_apis: cdktf.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktf.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesMinuteMetricsAToHclTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsAOutputReference | StorageAccountQueuePropertiesMinuteMetricsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_apis: {
      value: cdktf.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesMinuteMetricsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesMinuteMetricsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesMinuteMetricsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktf.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktf.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueuePropertiesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}
  */
  readonly update?: string;
}

export function storageAccountQueuePropertiesTimeoutsToTerraform(struct?: StorageAccountQueuePropertiesTimeouts | cdktf.IResolvable): any {
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


export function storageAccountQueuePropertiesTimeoutsToHclTerraform(struct?: StorageAccountQueuePropertiesTimeouts | cdktf.IResolvable): any {
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

export class StorageAccountQueuePropertiesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountQueuePropertiesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StorageAccountQueuePropertiesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}
*/
export class StorageAccountQueuePropertiesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_queue_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccountQueuePropertiesA to import
  * @param importFromId The id of the existing StorageAccountQueuePropertiesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_queue_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountQueuePropertiesAConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountQueuePropertiesAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_queue_properties',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._storageAccountId = config.storageAccountId;
    this._corsRule.internalValue = config.corsRule;
    this._hourMetrics.internalValue = config.hourMetrics;
    this._logging.internalValue = config.logging;
    this._minuteMetrics.internalValue = config.minuteMetrics;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new StorageAccountQueuePropertiesCorsRuleAList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: StorageAccountQueuePropertiesCorsRuleA[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // hour_metrics - computed: false, optional: true, required: false
  private _hourMetrics = new StorageAccountQueuePropertiesHourMetricsAOutputReference(this, "hour_metrics");
  public get hourMetrics() {
    return this._hourMetrics;
  }
  public putHourMetrics(value: StorageAccountQueuePropertiesHourMetricsA) {
    this._hourMetrics.internalValue = value;
  }
  public resetHourMetrics() {
    this._hourMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourMetricsInput() {
    return this._hourMetrics.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageAccountQueuePropertiesLoggingAOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: StorageAccountQueuePropertiesLoggingA) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // minute_metrics - computed: false, optional: true, required: false
  private _minuteMetrics = new StorageAccountQueuePropertiesMinuteMetricsAOutputReference(this, "minute_metrics");
  public get minuteMetrics() {
    return this._minuteMetrics;
  }
  public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetricsA) {
    this._minuteMetrics.internalValue = value;
  }
  public resetMinuteMetrics() {
    this._minuteMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteMetricsInput() {
    return this._minuteMetrics.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountQueuePropertiesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountQueuePropertiesTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      cors_rule: cdktf.listMapper(storageAccountQueuePropertiesCorsRuleAToTerraform, true)(this._corsRule.internalValue),
      hour_metrics: storageAccountQueuePropertiesHourMetricsAToTerraform(this._hourMetrics.internalValue),
      logging: storageAccountQueuePropertiesLoggingAToTerraform(this._logging.internalValue),
      minute_metrics: storageAccountQueuePropertiesMinuteMetricsAToTerraform(this._minuteMetrics.internalValue),
      timeouts: storageAccountQueuePropertiesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_rule: {
        value: cdktf.listMapperHcl(storageAccountQueuePropertiesCorsRuleAToHclTerraform, true)(this._corsRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesCorsRuleAList",
      },
      hour_metrics: {
        value: storageAccountQueuePropertiesHourMetricsAToHclTerraform(this._hourMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesHourMetricsAList",
      },
      logging: {
        value: storageAccountQueuePropertiesLoggingAToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesLoggingAList",
      },
      minute_metrics: {
        value: storageAccountQueuePropertiesMinuteMetricsAToHclTerraform(this._minuteMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesMinuteMetricsAList",
      },
      timeouts: {
        value: storageAccountQueuePropertiesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageAccountQueuePropertiesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
