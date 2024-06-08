# `chaosStudioExperiment` Submodule <a name="`chaosStudioExperiment` Submodule" id="@cdktf/provider-azurerm.chaosStudioExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChaosStudioExperiment <a name="ChaosStudioExperiment" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment azurerm_chaos_studio_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperiment;

ChaosStudioExperiment.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .selectors(IResolvable)
    .selectors(java.util.List<ChaosStudioExperimentSelectors>)
    .steps(IResolvable)
    .steps(java.util.List<ChaosStudioExperimentSteps>)
//  .id(java.lang.String)
//  .identity(ChaosStudioExperimentIdentity)
//  .timeouts(ChaosStudioExperimentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.selectors">selectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>></code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>></code> | steps block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}.

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.selectors"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#selectors ChaosStudioExperiment#selectors}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.steps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#steps ChaosStudioExperiment#steps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#identity ChaosStudioExperiment#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#timeouts ChaosStudioExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity"></a>

```java
public void putIdentity(ChaosStudioExperimentIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors"></a>

```java
public void putSelectors(IResolvable OR java.util.List<ChaosStudioExperimentSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>>

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps"></a>

```java
public void putSteps(IResolvable OR java.util.List<ChaosStudioExperimentSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts"></a>

```java
public void putTimeouts(ChaosStudioExperimentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperiment;

ChaosStudioExperiment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperiment;

ChaosStudioExperiment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperiment;

ChaosStudioExperiment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperiment;

ChaosStudioExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChaosStudioExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChaosStudioExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChaosStudioExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChaosStudioExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChaosStudioExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput">selectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identity"></a>

```java
public ChaosStudioExperimentIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference">ChaosStudioExperimentIdentityOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectors"></a>

```java
public ChaosStudioExperimentSelectorsList getSelectors();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList">ChaosStudioExperimentSelectorsList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.steps"></a>

```java
public ChaosStudioExperimentStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList">ChaosStudioExperimentStepsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeouts"></a>

```java
public ChaosStudioExperimentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference">ChaosStudioExperimentTimeoutsOutputReference</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.identityInput"></a>

```java
public ChaosStudioExperimentIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.selectorsInput"></a>

```java
public java.lang.Object getSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.stepsInput"></a>

```java
public java.lang.Object getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperiment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChaosStudioExperimentConfig <a name="ChaosStudioExperimentConfig" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentConfig;

ChaosStudioExperimentConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .selectors(IResolvable)
    .selectors(java.util.List<ChaosStudioExperimentSelectors>)
    .steps(IResolvable)
    .steps(java.util.List<ChaosStudioExperimentSteps>)
//  .id(java.lang.String)
//  .identity(ChaosStudioExperimentIdentity)
//  .timeouts(ChaosStudioExperimentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors">selectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>></code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>></code> | steps block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#location ChaosStudioExperiment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#resource_group_name ChaosStudioExperiment#resource_group_name}.

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.selectors"></a>

```java
public java.lang.Object getSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#selectors ChaosStudioExperiment#selectors}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.steps"></a>

```java
public java.lang.Object getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#steps ChaosStudioExperiment#steps}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#id ChaosStudioExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.identity"></a>

```java
public ChaosStudioExperimentIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#identity ChaosStudioExperiment#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentConfig.property.timeouts"></a>

```java
public ChaosStudioExperimentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#timeouts ChaosStudioExperiment#timeouts}

---

### ChaosStudioExperimentIdentity <a name="ChaosStudioExperimentIdentity" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentIdentity;

ChaosStudioExperimentIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#type ChaosStudioExperiment#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#identity_ids ChaosStudioExperiment#identity_ids}.

---

### ChaosStudioExperimentSelectors <a name="ChaosStudioExperimentSelectors" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentSelectors;

ChaosStudioExperimentSelectors.builder()
    .chaosStudioTargetIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds">chaosStudioTargetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `chaosStudioTargetIds`<sup>Required</sup> <a name="chaosStudioTargetIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.chaosStudioTargetIds"></a>

```java
public java.util.List<java.lang.String> getChaosStudioTargetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#chaos_studio_target_ids ChaosStudioExperiment#chaos_studio_target_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentSteps <a name="ChaosStudioExperimentSteps" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentSteps;

ChaosStudioExperimentSteps.builder()
    .branch(IResolvable)
    .branch(java.util.List<ChaosStudioExperimentStepsBranch>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch">branch</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>></code> | branch block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.branch"></a>

```java
public java.lang.Object getBranch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>>

branch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#branch ChaosStudioExperiment#branch}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranch <a name="ChaosStudioExperimentStepsBranch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranch;

ChaosStudioExperimentStepsBranch.builder()
    .actions(IResolvable)
    .actions(java.util.List<ChaosStudioExperimentStepsBranchActions>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions">actions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>></code> | actions block. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.actions"></a>

```java
public java.lang.Object getActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#actions ChaosStudioExperiment#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#name ChaosStudioExperiment#name}.

---

### ChaosStudioExperimentStepsBranchActions <a name="ChaosStudioExperimentStepsBranchActions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranchActions;

ChaosStudioExperimentStepsBranchActions.builder()
    .actionType(java.lang.String)
//  .duration(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .selectorName(java.lang.String)
//  .urn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName">selectorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn">urn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}. |

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#action_type ChaosStudioExperiment#action_type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#duration ChaosStudioExperiment#duration}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#parameters ChaosStudioExperiment#parameters}.

---

##### `selectorName`<sup>Optional</sup> <a name="selectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.selectorName"></a>

```java
public java.lang.String getSelectorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#selector_name ChaosStudioExperiment#selector_name}.

---

##### `urn`<sup>Optional</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#urn ChaosStudioExperiment#urn}.

---

### ChaosStudioExperimentTimeouts <a name="ChaosStudioExperimentTimeouts" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentTimeouts;

ChaosStudioExperimentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#create ChaosStudioExperiment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#delete ChaosStudioExperiment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#read ChaosStudioExperiment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/chaos_studio_experiment#update ChaosStudioExperiment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChaosStudioExperimentIdentityOutputReference <a name="ChaosStudioExperimentIdentityOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentIdentityOutputReference;

new ChaosStudioExperimentIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentityOutputReference.property.internalValue"></a>

```java
public ChaosStudioExperimentIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentIdentity">ChaosStudioExperimentIdentity</a>

---


### ChaosStudioExperimentSelectorsList <a name="ChaosStudioExperimentSelectorsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentSelectorsList;

new ChaosStudioExperimentSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get"></a>

```java
public ChaosStudioExperimentSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>>

---


### ChaosStudioExperimentSelectorsOutputReference <a name="ChaosStudioExperimentSelectorsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentSelectorsOutputReference;

new ChaosStudioExperimentSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput">chaosStudioTargetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds">chaosStudioTargetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chaosStudioTargetIdsInput`<sup>Optional</sup> <a name="chaosStudioTargetIdsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIdsInput"></a>

```java
public java.util.List<java.lang.String> getChaosStudioTargetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `chaosStudioTargetIds`<sup>Required</sup> <a name="chaosStudioTargetIds" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.chaosStudioTargetIds"></a>

```java
public java.util.List<java.lang.String> getChaosStudioTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSelectors">ChaosStudioExperimentSelectors</a>

---


### ChaosStudioExperimentStepsBranchActionsList <a name="ChaosStudioExperimentStepsBranchActionsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranchActionsList;

new ChaosStudioExperimentStepsBranchActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get"></a>

```java
public ChaosStudioExperimentStepsBranchActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>>

---


### ChaosStudioExperimentStepsBranchActionsOutputReference <a name="ChaosStudioExperimentStepsBranchActionsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranchActionsOutputReference;

new ChaosStudioExperimentStepsBranchActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName">resetSelectorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn">resetUrn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSelectorName` <a name="resetSelectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetSelectorName"></a>

```java
public void resetSelectorName()
```

##### `resetUrn` <a name="resetUrn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.resetUrn"></a>

```java
public void resetUrn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput">selectorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput">urnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName">selectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn">urn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `selectorNameInput`<sup>Optional</sup> <a name="selectorNameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorNameInput"></a>

```java
public java.lang.String getSelectorNameInput();
```

- *Type:* java.lang.String

---

##### `urnInput`<sup>Optional</sup> <a name="urnInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urnInput"></a>

```java
public java.lang.String getUrnInput();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `selectorName`<sup>Required</sup> <a name="selectorName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.selectorName"></a>

```java
public java.lang.String getSelectorName();
```

- *Type:* java.lang.String

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.urn"></a>

```java
public java.lang.String getUrn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>

---


### ChaosStudioExperimentStepsBranchList <a name="ChaosStudioExperimentStepsBranchList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranchList;

new ChaosStudioExperimentStepsBranchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get"></a>

```java
public ChaosStudioExperimentStepsBranchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>>

---


### ChaosStudioExperimentStepsBranchOutputReference <a name="ChaosStudioExperimentStepsBranchOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsBranchOutputReference;

new ChaosStudioExperimentStepsBranchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions"></a>

```java
public void putActions(IResolvable OR java.util.List<ChaosStudioExperimentStepsBranchActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.putActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput">actionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actions"></a>

```java
public ChaosStudioExperimentStepsBranchActionsList getActions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActionsList">ChaosStudioExperimentStepsBranchActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.actionsInput"></a>

```java
public java.lang.Object getActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchActions">ChaosStudioExperimentStepsBranchActions</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>

---


### ChaosStudioExperimentStepsList <a name="ChaosStudioExperimentStepsList" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsList;

new ChaosStudioExperimentStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get"></a>

```java
public ChaosStudioExperimentStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>>

---


### ChaosStudioExperimentStepsOutputReference <a name="ChaosStudioExperimentStepsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentStepsOutputReference;

new ChaosStudioExperimentStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch">putBranch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranch` <a name="putBranch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch"></a>

```java
public void putBranch(IResolvable OR java.util.List<ChaosStudioExperimentStepsBranch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.putBranch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput">branchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branch"></a>

```java
public ChaosStudioExperimentStepsBranchList getBranch();
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranchList">ChaosStudioExperimentStepsBranchList</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.branchInput"></a>

```java
public java.lang.Object getBranchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsBranch">ChaosStudioExperimentStepsBranch</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentStepsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentSteps">ChaosStudioExperimentSteps</a>

---


### ChaosStudioExperimentTimeoutsOutputReference <a name="ChaosStudioExperimentTimeoutsOutputReference" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.chaos_studio_experiment.ChaosStudioExperimentTimeoutsOutputReference;

new ChaosStudioExperimentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.chaosStudioExperiment.ChaosStudioExperimentTimeouts">ChaosStudioExperimentTimeouts</a>

---



