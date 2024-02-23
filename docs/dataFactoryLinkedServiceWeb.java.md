# `dataFactoryLinkedServiceWeb` Submodule <a name="`dataFactoryLinkedServiceWeb` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceWeb <a name="DataFactoryLinkedServiceWeb" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web azurerm_data_factory_linked_service_web}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWeb;

DataFactoryLinkedServiceWeb.Builder.create(Construct scope, java.lang.String id)
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
    .authenticationType(java.lang.String)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .password(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceWebTimeouts)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#authentication_type DataFactoryLinkedServiceWeb#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#data_factory_id DataFactoryLinkedServiceWeb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#name DataFactoryLinkedServiceWeb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#url DataFactoryLinkedServiceWeb#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#additional_properties DataFactoryLinkedServiceWeb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#annotations DataFactoryLinkedServiceWeb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#description DataFactoryLinkedServiceWeb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#id DataFactoryLinkedServiceWeb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#integration_runtime_name DataFactoryLinkedServiceWeb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#parameters DataFactoryLinkedServiceWeb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#password DataFactoryLinkedServiceWeb#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#username DataFactoryLinkedServiceWeb#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#authentication_type DataFactoryLinkedServiceWeb#authentication_type}.

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#data_factory_id DataFactoryLinkedServiceWeb#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#name DataFactoryLinkedServiceWeb#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#url DataFactoryLinkedServiceWeb#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#additional_properties DataFactoryLinkedServiceWeb#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#annotations DataFactoryLinkedServiceWeb#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#description DataFactoryLinkedServiceWeb#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#id DataFactoryLinkedServiceWeb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#integration_runtime_name DataFactoryLinkedServiceWeb#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#parameters DataFactoryLinkedServiceWeb#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#password DataFactoryLinkedServiceWeb#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#timeouts DataFactoryLinkedServiceWeb#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#username DataFactoryLinkedServiceWeb#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedServiceWebTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetIntegrationRuntimeName"></a>

```java
public void resetIntegrationRuntimeName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceWeb resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWeb;

DataFactoryLinkedServiceWeb.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWeb;

DataFactoryLinkedServiceWeb.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWeb;

DataFactoryLinkedServiceWeb.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWeb;

DataFactoryLinkedServiceWeb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryLinkedServiceWeb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceWeb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryLinkedServiceWeb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryLinkedServiceWeb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceWeb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference">DataFactoryLinkedServiceWebTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.timeouts"></a>

```java
public DataFactoryLinkedServiceWebTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference">DataFactoryLinkedServiceWebTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.integrationRuntimeNameInput"></a>

```java
public java.lang.String getIntegrationRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWeb.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceWebConfig <a name="DataFactoryLinkedServiceWebConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWebConfig;

DataFactoryLinkedServiceWebConfig.builder()
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
    .authenticationType(java.lang.String)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .password(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceWebTimeouts)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#authentication_type DataFactoryLinkedServiceWeb#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#data_factory_id DataFactoryLinkedServiceWeb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#name DataFactoryLinkedServiceWeb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#url DataFactoryLinkedServiceWeb#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#additional_properties DataFactoryLinkedServiceWeb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#annotations DataFactoryLinkedServiceWeb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#description DataFactoryLinkedServiceWeb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#id DataFactoryLinkedServiceWeb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#integration_runtime_name DataFactoryLinkedServiceWeb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#parameters DataFactoryLinkedServiceWeb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#password DataFactoryLinkedServiceWeb#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#username DataFactoryLinkedServiceWeb#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#authentication_type DataFactoryLinkedServiceWeb#authentication_type}.

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#data_factory_id DataFactoryLinkedServiceWeb#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#name DataFactoryLinkedServiceWeb#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#url DataFactoryLinkedServiceWeb#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#additional_properties DataFactoryLinkedServiceWeb#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#annotations DataFactoryLinkedServiceWeb#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#description DataFactoryLinkedServiceWeb#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#id DataFactoryLinkedServiceWeb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#integration_runtime_name DataFactoryLinkedServiceWeb#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#parameters DataFactoryLinkedServiceWeb#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#password DataFactoryLinkedServiceWeb#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.timeouts"></a>

```java
public DataFactoryLinkedServiceWebTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#timeouts DataFactoryLinkedServiceWeb#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#username DataFactoryLinkedServiceWeb#username}.

---

### DataFactoryLinkedServiceWebTimeouts <a name="DataFactoryLinkedServiceWebTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWebTimeouts;

DataFactoryLinkedServiceWebTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#create DataFactoryLinkedServiceWeb#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#delete DataFactoryLinkedServiceWeb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#read DataFactoryLinkedServiceWeb#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#update DataFactoryLinkedServiceWeb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#create DataFactoryLinkedServiceWeb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#delete DataFactoryLinkedServiceWeb#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#read DataFactoryLinkedServiceWeb#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/data_factory_linked_service_web#update DataFactoryLinkedServiceWeb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceWebTimeoutsOutputReference <a name="DataFactoryLinkedServiceWebTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_web.DataFactoryLinkedServiceWebTimeoutsOutputReference;

new DataFactoryLinkedServiceWebTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceWeb.DataFactoryLinkedServiceWebTimeouts">DataFactoryLinkedServiceWebTimeouts</a>

---



