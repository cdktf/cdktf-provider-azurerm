# `azurerm_data_factory_linked_custom_service`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_custom_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service).

# `dataFactoryLinkedCustomService` Submodule <a name="`dataFactoryLinkedCustomService` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedCustomService <a name="DataFactoryLinkedCustomService" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service azurerm_data_factory_linked_custom_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomService;

DataFactoryLinkedCustomService.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
    .typePropertiesJson(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntime(DataFactoryLinkedCustomServiceIntegrationRuntime)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataFactoryLinkedCustomServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#data_factory_id DataFactoryLinkedCustomService#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type DataFactoryLinkedCustomService#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.typePropertiesJson">typePropertiesJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type_properties_json DataFactoryLinkedCustomService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#additional_properties DataFactoryLinkedCustomService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#annotations DataFactoryLinkedCustomService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#description DataFactoryLinkedCustomService#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#id DataFactoryLinkedCustomService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.integrationRuntime">integrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#data_factory_id DataFactoryLinkedCustomService#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type DataFactoryLinkedCustomService#type}.

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.typePropertiesJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type_properties_json DataFactoryLinkedCustomService#type_properties_json}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#additional_properties DataFactoryLinkedCustomService#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#annotations DataFactoryLinkedCustomService#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#description DataFactoryLinkedCustomService#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#id DataFactoryLinkedCustomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntime`<sup>Optional</sup> <a name="integrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.integrationRuntime"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#integration_runtime DataFactoryLinkedCustomService#integration_runtime}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#timeouts DataFactoryLinkedCustomService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putIntegrationRuntime">putIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetIntegrationRuntime">resetIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIntegrationRuntime` <a name="putIntegrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putIntegrationRuntime"></a>

```java
public void putIntegrationRuntime(DataFactoryLinkedCustomServiceIntegrationRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putIntegrationRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedCustomServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntime` <a name="resetIntegrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetIntegrationRuntime"></a>

```java
public void resetIntegrationRuntime()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomService;

DataFactoryLinkedCustomService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomService;

DataFactoryLinkedCustomService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomService;

DataFactoryLinkedCustomService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.integrationRuntime">integrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference">DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference">DataFactoryLinkedCustomServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.integrationRuntimeInput">integrationRuntimeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typePropertiesJsonInput">typePropertiesJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typePropertiesJson">typePropertiesJson</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationRuntime`<sup>Required</sup> <a name="integrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.integrationRuntime"></a>

```java
public DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference getIntegrationRuntime();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference">DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.timeouts"></a>

```java
public DataFactoryLinkedCustomServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference">DataFactoryLinkedCustomServiceTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeInput`<sup>Optional</sup> <a name="integrationRuntimeInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.integrationRuntimeInput"></a>

```java
public DataFactoryLinkedCustomServiceIntegrationRuntime getIntegrationRuntimeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `typePropertiesJsonInput`<sup>Optional</sup> <a name="typePropertiesJsonInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typePropertiesJsonInput"></a>

```java
public java.lang.String getTypePropertiesJsonInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.typePropertiesJson"></a>

```java
public java.lang.String getTypePropertiesJson();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedCustomServiceConfig <a name="DataFactoryLinkedCustomServiceConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomServiceConfig;

DataFactoryLinkedCustomServiceConfig.builder()
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
    .type(java.lang.String)
    .typePropertiesJson(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntime(DataFactoryLinkedCustomServiceIntegrationRuntime)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataFactoryLinkedCustomServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#data_factory_id DataFactoryLinkedCustomService#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type DataFactoryLinkedCustomService#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.typePropertiesJson">typePropertiesJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type_properties_json DataFactoryLinkedCustomService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#additional_properties DataFactoryLinkedCustomService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#annotations DataFactoryLinkedCustomService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#description DataFactoryLinkedCustomService#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#id DataFactoryLinkedCustomService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.integrationRuntime">integrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#data_factory_id DataFactoryLinkedCustomService#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type DataFactoryLinkedCustomService#type}.

---

##### `typePropertiesJson`<sup>Required</sup> <a name="typePropertiesJson" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.typePropertiesJson"></a>

```java
public java.lang.String getTypePropertiesJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#type_properties_json DataFactoryLinkedCustomService#type_properties_json}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#additional_properties DataFactoryLinkedCustomService#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#annotations DataFactoryLinkedCustomService#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#description DataFactoryLinkedCustomService#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#id DataFactoryLinkedCustomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntime`<sup>Optional</sup> <a name="integrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.integrationRuntime"></a>

```java
public DataFactoryLinkedCustomServiceIntegrationRuntime getIntegrationRuntime();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#integration_runtime DataFactoryLinkedCustomService#integration_runtime}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceConfig.property.timeouts"></a>

```java
public DataFactoryLinkedCustomServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#timeouts DataFactoryLinkedCustomService#timeouts}

---

### DataFactoryLinkedCustomServiceIntegrationRuntime <a name="DataFactoryLinkedCustomServiceIntegrationRuntime" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomServiceIntegrationRuntime;

DataFactoryLinkedCustomServiceIntegrationRuntime.builder()
    .name(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#name DataFactoryLinkedCustomService#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#parameters DataFactoryLinkedCustomService#parameters}.

---

### DataFactoryLinkedCustomServiceTimeouts <a name="DataFactoryLinkedCustomServiceTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomServiceTimeouts;

DataFactoryLinkedCustomServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#create DataFactoryLinkedCustomService#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#delete DataFactoryLinkedCustomService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#read DataFactoryLinkedCustomService#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#update DataFactoryLinkedCustomService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#create DataFactoryLinkedCustomService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#delete DataFactoryLinkedCustomService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#read DataFactoryLinkedCustomService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/data_factory_linked_custom_service#update DataFactoryLinkedCustomService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference <a name="DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference;

new DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntimeOutputReference.property.internalValue"></a>

```java
public DataFactoryLinkedCustomServiceIntegrationRuntime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceIntegrationRuntime">DataFactoryLinkedCustomServiceIntegrationRuntime</a>

---


### DataFactoryLinkedCustomServiceTimeoutsOutputReference <a name="DataFactoryLinkedCustomServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_custom_service.DataFactoryLinkedCustomServiceTimeoutsOutputReference;

new DataFactoryLinkedCustomServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedCustomService.DataFactoryLinkedCustomServiceTimeouts">DataFactoryLinkedCustomServiceTimeouts</a>

---



