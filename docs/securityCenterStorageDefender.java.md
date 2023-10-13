# `azurerm_security_center_storage_defender`

Refer to the Terraform Registory for docs: [`azurerm_security_center_storage_defender`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender).

# `securityCenterStorageDefender` Submodule <a name="`securityCenterStorageDefender` Submodule" id="@cdktf/provider-azurerm.securityCenterStorageDefender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterStorageDefender <a name="SecurityCenterStorageDefender" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefender;

SecurityCenterStorageDefender.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .storageAccountId(java.lang.String)
//  .id(java.lang.String)
//  .malwareScanningOnUploadCapGbPerMonth(java.lang.Number)
//  .malwareScanningOnUploadEnabled(java.lang.Boolean)
//  .malwareScanningOnUploadEnabled(IResolvable)
//  .overrideSubscriptionSettingsEnabled(java.lang.Boolean)
//  .overrideSubscriptionSettingsEnabled(IResolvable)
//  .sensitiveDataDiscoveryEnabled(java.lang.Boolean)
//  .sensitiveDataDiscoveryEnabled(IResolvable)
//  .timeouts(SecurityCenterStorageDefenderTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.malwareScanningOnUploadCapGbPerMonth">malwareScanningOnUploadCapGbPerMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.malwareScanningOnUploadEnabled">malwareScanningOnUploadEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.overrideSubscriptionSettingsEnabled">overrideSubscriptionSettingsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.sensitiveDataDiscoveryEnabled">sensitiveDataDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `malwareScanningOnUploadCapGbPerMonth`<sup>Optional</sup> <a name="malwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.malwareScanningOnUploadCapGbPerMonth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}.

---

##### `malwareScanningOnUploadEnabled`<sup>Optional</sup> <a name="malwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.malwareScanningOnUploadEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}.

---

##### `overrideSubscriptionSettingsEnabled`<sup>Optional</sup> <a name="overrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.overrideSubscriptionSettingsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}.

---

##### `sensitiveDataDiscoveryEnabled`<sup>Optional</sup> <a name="sensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.sensitiveDataDiscoveryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth">resetMalwareScanningOnUploadCapGbPerMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled">resetMalwareScanningOnUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled">resetOverrideSubscriptionSettingsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled">resetSensitiveDataDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts"></a>

```java
public void putTimeouts(SecurityCenterStorageDefenderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId"></a>

```java
public void resetId()
```

##### `resetMalwareScanningOnUploadCapGbPerMonth` <a name="resetMalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth"></a>

```java
public void resetMalwareScanningOnUploadCapGbPerMonth()
```

##### `resetMalwareScanningOnUploadEnabled` <a name="resetMalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled"></a>

```java
public void resetMalwareScanningOnUploadEnabled()
```

##### `resetOverrideSubscriptionSettingsEnabled` <a name="resetOverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled"></a>

```java
public void resetOverrideSubscriptionSettingsEnabled()
```

##### `resetSensitiveDataDiscoveryEnabled` <a name="resetSensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled"></a>

```java
public void resetSensitiveDataDiscoveryEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefender;

SecurityCenterStorageDefender.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefender;

SecurityCenterStorageDefender.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefender;

SecurityCenterStorageDefender.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput">malwareScanningOnUploadCapGbPerMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput">malwareScanningOnUploadEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput">overrideSubscriptionSettingsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput">sensitiveDataDiscoveryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth">malwareScanningOnUploadCapGbPerMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled">malwareScanningOnUploadEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled">overrideSubscriptionSettingsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled">sensitiveDataDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts"></a>

```java
public SecurityCenterStorageDefenderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `malwareScanningOnUploadCapGbPerMonthInput`<sup>Optional</sup> <a name="malwareScanningOnUploadCapGbPerMonthInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput"></a>

```java
public java.lang.Number getMalwareScanningOnUploadCapGbPerMonthInput();
```

- *Type:* java.lang.Number

---

##### `malwareScanningOnUploadEnabledInput`<sup>Optional</sup> <a name="malwareScanningOnUploadEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput"></a>

```java
public java.lang.Object getMalwareScanningOnUploadEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSubscriptionSettingsEnabledInput`<sup>Optional</sup> <a name="overrideSubscriptionSettingsEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput"></a>

```java
public java.lang.Object getOverrideSubscriptionSettingsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensitiveDataDiscoveryEnabledInput`<sup>Optional</sup> <a name="sensitiveDataDiscoveryEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput"></a>

```java
public java.lang.Object getSensitiveDataDiscoveryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `malwareScanningOnUploadCapGbPerMonth`<sup>Required</sup> <a name="malwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth"></a>

```java
public java.lang.Number getMalwareScanningOnUploadCapGbPerMonth();
```

- *Type:* java.lang.Number

---

##### `malwareScanningOnUploadEnabled`<sup>Required</sup> <a name="malwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled"></a>

```java
public java.lang.Object getMalwareScanningOnUploadEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideSubscriptionSettingsEnabled`<sup>Required</sup> <a name="overrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled"></a>

```java
public java.lang.Object getOverrideSubscriptionSettingsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sensitiveDataDiscoveryEnabled`<sup>Required</sup> <a name="sensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled"></a>

```java
public java.lang.Object getSensitiveDataDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterStorageDefenderConfig <a name="SecurityCenterStorageDefenderConfig" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefenderConfig;

SecurityCenterStorageDefenderConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .storageAccountId(java.lang.String)
//  .id(java.lang.String)
//  .malwareScanningOnUploadCapGbPerMonth(java.lang.Number)
//  .malwareScanningOnUploadEnabled(java.lang.Boolean)
//  .malwareScanningOnUploadEnabled(IResolvable)
//  .overrideSubscriptionSettingsEnabled(java.lang.Boolean)
//  .overrideSubscriptionSettingsEnabled(IResolvable)
//  .sensitiveDataDiscoveryEnabled(java.lang.Boolean)
//  .sensitiveDataDiscoveryEnabled(IResolvable)
//  .timeouts(SecurityCenterStorageDefenderTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth">malwareScanningOnUploadCapGbPerMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled">malwareScanningOnUploadEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled">overrideSubscriptionSettingsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled">sensitiveDataDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `malwareScanningOnUploadCapGbPerMonth`<sup>Optional</sup> <a name="malwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth"></a>

```java
public java.lang.Number getMalwareScanningOnUploadCapGbPerMonth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}.

---

##### `malwareScanningOnUploadEnabled`<sup>Optional</sup> <a name="malwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled"></a>

```java
public java.lang.Object getMalwareScanningOnUploadEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}.

---

##### `overrideSubscriptionSettingsEnabled`<sup>Optional</sup> <a name="overrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled"></a>

```java
public java.lang.Object getOverrideSubscriptionSettingsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}.

---

##### `sensitiveDataDiscoveryEnabled`<sup>Optional</sup> <a name="sensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled"></a>

```java
public java.lang.Object getSensitiveDataDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts"></a>

```java
public SecurityCenterStorageDefenderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}

---

### SecurityCenterStorageDefenderTimeouts <a name="SecurityCenterStorageDefenderTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefenderTimeouts;

SecurityCenterStorageDefenderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterStorageDefenderTimeoutsOutputReference <a name="SecurityCenterStorageDefenderTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_storage_defender.SecurityCenterStorageDefenderTimeoutsOutputReference;

new SecurityCenterStorageDefenderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---



