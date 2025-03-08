# `resourceGroupTemplateDeployment` Submodule <a name="`resourceGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupTemplateDeployment <a name="ResourceGroupTemplateDeployment" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment azurerm_resource_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeployment;

ResourceGroupTemplateDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentMode(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .debugLevel(java.lang.String)
//  .id(java.lang.String)
//  .parametersContent(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateContent(java.lang.String)
//  .templateSpecVersionId(java.lang.String)
//  .timeouts(ResourceGroupTemplateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.templateContent">templateContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.deploymentMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.debugLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.parametersContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.templateContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.templateSpecVersionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#timeouts ResourceGroupTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetDebugLevel">resetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetParametersContent">resetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateContent">resetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateSpecVersionId">resetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts"></a>

```java
public void putTimeouts(ResourceGroupTemplateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

---

##### `resetDebugLevel` <a name="resetDebugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetDebugLevel"></a>

```java
public void resetDebugLevel()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetParametersContent` <a name="resetParametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetParametersContent"></a>

```java
public void resetParametersContent()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateContent` <a name="resetTemplateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateContent"></a>

```java
public void resetTemplateContent()
```

##### `resetTemplateSpecVersionId` <a name="resetTemplateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateSpecVersionId"></a>

```java
public void resetTemplateSpecVersionId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceGroupTemplateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeployment;

ResourceGroupTemplateDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeployment;

ResourceGroupTemplateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeployment;

ResourceGroupTemplateDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeployment;

ResourceGroupTemplateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceGroupTemplateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceGroupTemplateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceGroupTemplateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceGroupTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceGroupTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.outputContent">outputContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference">ResourceGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevelInput">debugLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentModeInput">deploymentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContentInput">parametersContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContentInput">templateContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionIdInput">templateSpecVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.outputContent"></a>

```java
public java.lang.String getOutputContent();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeouts"></a>

```java
public ResourceGroupTemplateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference">ResourceGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debugLevelInput`<sup>Optional</sup> <a name="debugLevelInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevelInput"></a>

```java
public java.lang.String getDebugLevelInput();
```

- *Type:* java.lang.String

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentModeInput"></a>

```java
public java.lang.String getDeploymentModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersContentInput`<sup>Optional</sup> <a name="parametersContentInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContentInput"></a>

```java
public java.lang.String getParametersContentInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContentInput"></a>

```java
public java.lang.String getTemplateContentInput();
```

- *Type:* java.lang.String

---

##### `templateSpecVersionIdInput`<sup>Optional</sup> <a name="templateSpecVersionIdInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionIdInput"></a>

```java
public java.lang.String getTemplateSpecVersionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

---

##### `debugLevel`<sup>Required</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevel"></a>

```java
public java.lang.String getDebugLevel();
```

- *Type:* java.lang.String

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parametersContent`<sup>Required</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContent"></a>

```java
public java.lang.String getParametersContent();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

---

##### `templateSpecVersionId`<sup>Required</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionId"></a>

```java
public java.lang.String getTemplateSpecVersionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupTemplateDeploymentConfig <a name="ResourceGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeploymentConfig;

ResourceGroupTemplateDeploymentConfig.builder()
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
    .deploymentMode(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .debugLevel(java.lang.String)
//  .id(java.lang.String)
//  .parametersContent(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateContent(java.lang.String)
//  .templateSpecVersionId(java.lang.String)
//  .timeouts(ResourceGroupTemplateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.deploymentMode">deploymentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.debugLevel">debugLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.parametersContent">parametersContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateContent">templateContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.deploymentMode"></a>

```java
public java.lang.String getDeploymentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.debugLevel"></a>

```java
public java.lang.String getDebugLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.parametersContent"></a>

```java
public java.lang.String getParametersContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateContent"></a>

```java
public java.lang.String getTemplateContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```java
public java.lang.String getTemplateSpecVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.timeouts"></a>

```java
public ResourceGroupTemplateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#timeouts ResourceGroupTemplateDeployment#timeouts}

---

### ResourceGroupTemplateDeploymentTimeouts <a name="ResourceGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeploymentTimeouts;

ResourceGroupTemplateDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#create ResourceGroupTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#delete ResourceGroupTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#read ResourceGroupTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#update ResourceGroupTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#create ResourceGroupTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#delete ResourceGroupTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#read ResourceGroupTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/resource_group_template_deployment#update ResourceGroupTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupTemplateDeploymentTimeoutsOutputReference <a name="ResourceGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_template_deployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference;

new ResourceGroupTemplateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

---



