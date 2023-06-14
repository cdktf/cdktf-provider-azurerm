# `azurerm_sentinel_data_connector_azure_advanced_threat_protection`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_azure_advanced_threat_protection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection).

# `sentinelDataConnectorAzureAdvancedThreatProtection` Submodule <a name="`sentinelDataConnectorAzureAdvancedThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtection <a name="SentinelDataConnectorAzureAdvancedThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection azurerm_sentinel_data_connector_azure_advanced_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.Builder.create(Construct scope, java.lang.String id)
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
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts"></a>

```java
public void putTimeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetId"></a>

```java
public void resetId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtection;

SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeouts"></a>

```java
public SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionConfig <a name="SentinelDataConnectorAzureAdvancedThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig;

SentinelDataConnectorAzureAdvancedThreatProtectionConfig.builder()
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
    .logAnalyticsWorkspaceId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .tenantId(java.lang.String)
//  .timeouts(SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```java
public java.lang.String getLogAnalyticsWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorAzureAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#name SentinelDataConnectorAzureAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#id SentinelDataConnectorAzureAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#tenant_id SentinelDataConnectorAzureAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionConfig.property.timeouts"></a>

```java
public SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#timeouts SentinelDataConnectorAzureAdvancedThreatProtection#timeouts}

---

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts;

SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#create SentinelDataConnectorAzureAdvancedThreatProtection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#delete SentinelDataConnectorAzureAdvancedThreatProtection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/sentinel_data_connector_azure_advanced_threat_protection#read SentinelDataConnectorAzureAdvancedThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_data_connector_azure_advanced_threat_protection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference;

new SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorAzureAdvancedThreatProtection.SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts">SentinelDataConnectorAzureAdvancedThreatProtectionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



