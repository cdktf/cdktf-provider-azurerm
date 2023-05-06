# `azurerm_data_factory_integration_runtime_self_hosted`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_integration_runtime_self_hosted`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted).

# `dataFactoryIntegrationRuntimeSelfHosted` Submodule <a name="`dataFactoryIntegrationRuntimeSelfHosted` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeSelfHosted <a name="DataFactoryIntegrationRuntimeSelfHosted" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted azurerm_data_factory_integration_runtime_self_hosted}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHosted;

DataFactoryIntegrationRuntimeSelfHosted.Builder.create(Construct scope, java.lang.String id)
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rbacAuthorization(IResolvable)
//  .rbacAuthorization(java.util.List<DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization>)
//  .timeouts(DataFactoryIntegrationRuntimeSelfHostedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.rbacAuthorization">rbacAuthorization</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>></code> | rbac_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rbacAuthorization`<sup>Optional</sup> <a name="rbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.rbacAuthorization"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>>

rbac_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#rbac_authorization DataFactoryIntegrationRuntimeSelfHosted#rbac_authorization}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#timeouts DataFactoryIntegrationRuntimeSelfHosted#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization">putRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization">resetRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRbacAuthorization` <a name="putRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization"></a>

```java
public void putRbacAuthorization(IResolvable OR java.util.List<DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryIntegrationRuntimeSelfHostedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId"></a>

```java
public void resetId()
```

##### `resetRbacAuthorization` <a name="resetRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization"></a>

```java
public void resetRbacAuthorization()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHosted;

DataFactoryIntegrationRuntimeSelfHosted.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHosted;

DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHosted;

DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey">primaryAuthorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization">rbacAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey">secondaryAuthorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput">rbacAuthorizationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `primaryAuthorizationKey`<sup>Required</sup> <a name="primaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey"></a>

```java
public java.lang.String getPrimaryAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `rbacAuthorization`<sup>Required</sup> <a name="rbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization"></a>

```java
public DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList getRbacAuthorization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a>

---

##### `secondaryAuthorizationKey`<sup>Required</sup> <a name="secondaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey"></a>

```java
public java.lang.String getSecondaryAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts"></a>

```java
public DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rbacAuthorizationInput`<sup>Optional</sup> <a name="rbacAuthorizationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput"></a>

```java
public java.lang.Object getRbacAuthorizationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeSelfHostedConfig <a name="DataFactoryIntegrationRuntimeSelfHostedConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedConfig;

DataFactoryIntegrationRuntimeSelfHostedConfig.builder()
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rbacAuthorization(IResolvable)
//  .rbacAuthorization(java.util.List<DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization>)
//  .timeouts(DataFactoryIntegrationRuntimeSelfHostedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization">rbacAuthorization</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>></code> | rbac_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rbacAuthorization`<sup>Optional</sup> <a name="rbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization"></a>

```java
public java.lang.Object getRbacAuthorization();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>>

rbac_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#rbac_authorization DataFactoryIntegrationRuntimeSelfHosted#rbac_authorization}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts"></a>

```java
public DataFactoryIntegrationRuntimeSelfHostedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#timeouts DataFactoryIntegrationRuntimeSelfHosted#timeouts}

---

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization;

DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.builder()
    .resourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}.

---

### DataFactoryIntegrationRuntimeSelfHostedTimeouts <a name="DataFactoryIntegrationRuntimeSelfHostedTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts;

DataFactoryIntegrationRuntimeSelfHostedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList;

new DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get"></a>

```java
public DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>>

---


### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference;

new DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a> OR com.hashicorp.cdktf.IResolvable

---


### DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_integration_runtime_self_hosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference;

new DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



