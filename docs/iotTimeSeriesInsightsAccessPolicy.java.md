# `azurerm_iot_time_series_insights_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy).

# `iotTimeSeriesInsightsAccessPolicy` Submodule <a name="`iotTimeSeriesInsightsAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsAccessPolicy <a name="IotTimeSeriesInsightsAccessPolicy" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy azurerm_iot_time_series_insights_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicy;

IotTimeSeriesInsightsAccessPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .principalObjectId(java.lang.String)
    .roles(java.util.List<java.lang.String>)
    .timeSeriesInsightsEnvironmentId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IotTimeSeriesInsightsAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.principalObjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeSeriesInsightsEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts"></a>

```java
public void putTimeouts(IotTimeSeriesInsightsAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicy;

IotTimeSeriesInsightsAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicy;

IotTimeSeriesInsightsAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicy;

IotTimeSeriesInsightsAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput">principalObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput">timeSeriesInsightsEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts"></a>

```java
public IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalObjectIdInput`<sup>Optional</sup> <a name="principalObjectIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput"></a>

```java
public java.lang.String getPrincipalObjectIdInput();
```

- *Type:* java.lang.String

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `timeSeriesInsightsEnvironmentIdInput`<sup>Optional</sup> <a name="timeSeriesInsightsEnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput"></a>

```java
public java.lang.String getTimeSeriesInsightsEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId"></a>

```java
public java.lang.String getPrincipalObjectId();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId"></a>

```java
public java.lang.String getTimeSeriesInsightsEnvironmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsAccessPolicyConfig <a name="IotTimeSeriesInsightsAccessPolicyConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicyConfig;

IotTimeSeriesInsightsAccessPolicyConfig.builder()
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
    .name(java.lang.String)
    .principalObjectId(java.lang.String)
    .roles(java.util.List<java.lang.String>)
    .timeSeriesInsightsEnvironmentId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IotTimeSeriesInsightsAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId">principalObjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId"></a>

```java
public java.lang.String getPrincipalObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId"></a>

```java
public java.lang.String getTimeSeriesInsightsEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts"></a>

```java
public IotTimeSeriesInsightsAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

### IotTimeSeriesInsightsAccessPolicyTimeouts <a name="IotTimeSeriesInsightsAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicyTimeouts;

IotTimeSeriesInsightsAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference <a name="IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_time_series_insights_access_policy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference;

new IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



