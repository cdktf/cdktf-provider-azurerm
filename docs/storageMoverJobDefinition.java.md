# `azurerm_storage_mover_job_definition`

Refer to the Terraform Registory for docs: [`azurerm_storage_mover_job_definition`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition).

# `storageMoverJobDefinition` Submodule <a name="`storageMoverJobDefinition` Submodule" id="@cdktf/provider-azurerm.storageMoverJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageMoverJobDefinition <a name="StorageMoverJobDefinition" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition azurerm_storage_mover_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinition;

StorageMoverJobDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .copyMode(java.lang.String)
    .name(java.lang.String)
    .sourceName(java.lang.String)
    .storageMoverProjectId(java.lang.String)
    .targetName(java.lang.String)
//  .agentName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .sourceSubPath(java.lang.String)
//  .targetSubPath(java.lang.String)
//  .timeouts(StorageMoverJobDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.copyMode">copyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.storageMoverProjectId">storageMoverProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.agentName">agentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceSubPath">sourceSubPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetSubPath">targetSubPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copyMode`<sup>Required</sup> <a name="copyMode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.copyMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `storageMoverProjectId`<sup>Required</sup> <a name="storageMoverProjectId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.storageMoverProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `agentName`<sup>Optional</sup> <a name="agentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.agentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceSubPath`<sup>Optional</sup> <a name="sourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.sourceSubPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `targetSubPath`<sup>Optional</sup> <a name="targetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.targetSubPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName">resetAgentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath">resetSourceSubPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath">resetTargetSubPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts"></a>

```java
public void putTimeouts(StorageMoverJobDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

---

##### `resetAgentName` <a name="resetAgentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetAgentName"></a>

```java
public void resetAgentName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetSourceSubPath` <a name="resetSourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetSourceSubPath"></a>

```java
public void resetSourceSubPath()
```

##### `resetTargetSubPath` <a name="resetTargetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTargetSubPath"></a>

```java
public void resetTargetSubPath()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinition;

StorageMoverJobDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinition;

StorageMoverJobDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinition;

StorageMoverJobDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput">agentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput">copyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput">sourceSubPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput">storageMoverProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput">targetSubPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName">agentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode">copyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath">sourceSubPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId">storageMoverProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath">targetSubPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeouts"></a>

```java
public StorageMoverJobDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference">StorageMoverJobDefinitionTimeoutsOutputReference</a>

---

##### `agentNameInput`<sup>Optional</sup> <a name="agentNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentNameInput"></a>

```java
public java.lang.String getAgentNameInput();
```

- *Type:* java.lang.String

---

##### `copyModeInput`<sup>Optional</sup> <a name="copyModeInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyModeInput"></a>

```java
public java.lang.String getCopyModeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceSubPathInput`<sup>Optional</sup> <a name="sourceSubPathInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPathInput"></a>

```java
public java.lang.String getSourceSubPathInput();
```

- *Type:* java.lang.String

---

##### `storageMoverProjectIdInput`<sup>Optional</sup> <a name="storageMoverProjectIdInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectIdInput"></a>

```java
public java.lang.String getStorageMoverProjectIdInput();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `targetSubPathInput`<sup>Optional</sup> <a name="targetSubPathInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPathInput"></a>

```java
public java.lang.String getTargetSubPathInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.agentName"></a>

```java
public java.lang.String getAgentName();
```

- *Type:* java.lang.String

---

##### `copyMode`<sup>Required</sup> <a name="copyMode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.copyMode"></a>

```java
public java.lang.String getCopyMode();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceSubPath`<sup>Required</sup> <a name="sourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.sourceSubPath"></a>

```java
public java.lang.String getSourceSubPath();
```

- *Type:* java.lang.String

---

##### `storageMoverProjectId`<sup>Required</sup> <a name="storageMoverProjectId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.storageMoverProjectId"></a>

```java
public java.lang.String getStorageMoverProjectId();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `targetSubPath`<sup>Required</sup> <a name="targetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.targetSubPath"></a>

```java
public java.lang.String getTargetSubPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageMoverJobDefinitionConfig <a name="StorageMoverJobDefinitionConfig" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinitionConfig;

StorageMoverJobDefinitionConfig.builder()
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
    .copyMode(java.lang.String)
    .name(java.lang.String)
    .sourceName(java.lang.String)
    .storageMoverProjectId(java.lang.String)
    .targetName(java.lang.String)
//  .agentName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .sourceSubPath(java.lang.String)
//  .targetSubPath(java.lang.String)
//  .timeouts(StorageMoverJobDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode">copyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId">storageMoverProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName">agentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath">sourceSubPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath">targetSubPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `copyMode`<sup>Required</sup> <a name="copyMode" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.copyMode"></a>

```java
public java.lang.String getCopyMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#copy_mode StorageMoverJobDefinition#copy_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#name StorageMoverJobDefinition#name}.

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_name StorageMoverJobDefinition#source_name}.

---

##### `storageMoverProjectId`<sup>Required</sup> <a name="storageMoverProjectId" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.storageMoverProjectId"></a>

```java
public java.lang.String getStorageMoverProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#storage_mover_project_id StorageMoverJobDefinition#storage_mover_project_id}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_name StorageMoverJobDefinition#target_name}.

---

##### `agentName`<sup>Optional</sup> <a name="agentName" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.agentName"></a>

```java
public java.lang.String getAgentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#agent_name StorageMoverJobDefinition#agent_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#description StorageMoverJobDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#id StorageMoverJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceSubPath`<sup>Optional</sup> <a name="sourceSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.sourceSubPath"></a>

```java
public java.lang.String getSourceSubPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#source_sub_path StorageMoverJobDefinition#source_sub_path}.

---

##### `targetSubPath`<sup>Optional</sup> <a name="targetSubPath" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.targetSubPath"></a>

```java
public java.lang.String getTargetSubPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#target_sub_path StorageMoverJobDefinition#target_sub_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionConfig.property.timeouts"></a>

```java
public StorageMoverJobDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#timeouts StorageMoverJobDefinition#timeouts}

---

### StorageMoverJobDefinitionTimeouts <a name="StorageMoverJobDefinitionTimeouts" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinitionTimeouts;

StorageMoverJobDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#create StorageMoverJobDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#delete StorageMoverJobDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#read StorageMoverJobDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_mover_job_definition#update StorageMoverJobDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageMoverJobDefinitionTimeoutsOutputReference <a name="StorageMoverJobDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.storage_mover_job_definition.StorageMoverJobDefinitionTimeoutsOutputReference;

new StorageMoverJobDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.storageMoverJobDefinition.StorageMoverJobDefinitionTimeouts">StorageMoverJobDefinitionTimeouts</a>

---



