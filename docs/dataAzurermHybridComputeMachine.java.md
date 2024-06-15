# `dataAzurermHybridComputeMachine` Submodule <a name="`dataAzurermHybridComputeMachine` Submodule" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermHybridComputeMachine <a name="DataAzurermHybridComputeMachine" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine azurerm_hybrid_compute_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachine;

DataAzurermHybridComputeMachine.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermHybridComputeMachineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#timeouts DataAzurermHybridComputeMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermHybridComputeMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermHybridComputeMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachine;

DataAzurermHybridComputeMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachine;

DataAzurermHybridComputeMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachine;

DataAzurermHybridComputeMachine.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachine;

DataAzurermHybridComputeMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermHybridComputeMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermHybridComputeMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermHybridComputeMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermHybridComputeMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermHybridComputeMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn">adFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration">agentConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey">clientPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata">cloudMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties">detectedProperties</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn">dnsFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange">lastStatusChange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData">locationData</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn">machineFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered">mssqlDiscovered</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName">osName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku">osSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId">parentClusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId">privateLinkScopeResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus">serviceStatus</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId">vmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid">vmUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adFqdn`<sup>Required</sup> <a name="adFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn"></a>

```java
public java.lang.String getAdFqdn();
```

- *Type:* java.lang.String

---

##### `agentConfiguration`<sup>Required</sup> <a name="agentConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationList getAgentConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `clientPublicKey`<sup>Required</sup> <a name="clientPublicKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey"></a>

```java
public java.lang.String getClientPublicKey();
```

- *Type:* java.lang.String

---

##### `cloudMetadata`<sup>Required</sup> <a name="cloudMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata"></a>

```java
public DataAzurermHybridComputeMachineCloudMetadataList getCloudMetadata();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a>

---

##### `detectedProperties`<sup>Required</sup> <a name="detectedProperties" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties"></a>

```java
public StringMap getDetectedProperties();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsFqdn`<sup>Required</sup> <a name="dnsFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn"></a>

```java
public java.lang.String getDnsFqdn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails"></a>

```java
public DataAzurermHybridComputeMachineErrorDetailsList getErrorDetails();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity"></a>

```java
public DataAzurermHybridComputeMachineIdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a>

---

##### `lastStatusChange`<sup>Required</sup> <a name="lastStatusChange" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange"></a>

```java
public java.lang.String getLastStatusChange();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `locationData`<sup>Required</sup> <a name="locationData" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData"></a>

```java
public DataAzurermHybridComputeMachineLocationDataList getLocationData();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a>

---

##### `machineFqdn`<sup>Required</sup> <a name="machineFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn"></a>

```java
public java.lang.String getMachineFqdn();
```

- *Type:* java.lang.String

---

##### `mssqlDiscovered`<sup>Required</sup> <a name="mssqlDiscovered" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered"></a>

```java
public IResolvable getMssqlDiscovered();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `osName`<sup>Required</sup> <a name="osName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile"></a>

```java
public DataAzurermHybridComputeMachineOsProfileList getOsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a>

---

##### `osSku`<sup>Required</sup> <a name="osSku" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku"></a>

```java
public java.lang.String getOsSku();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `parentClusterResourceId`<sup>Required</sup> <a name="parentClusterResourceId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId"></a>

```java
public java.lang.String getParentClusterResourceId();
```

- *Type:* java.lang.String

---

##### `privateLinkScopeResourceId`<sup>Required</sup> <a name="privateLinkScopeResourceId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId"></a>

```java
public java.lang.String getPrivateLinkScopeResourceId();
```

- *Type:* java.lang.String

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusList getServiceStatus();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts"></a>

```java
public DataAzurermHybridComputeMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a>

---

##### `vmId`<sup>Required</sup> <a name="vmId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId"></a>

```java
public java.lang.String getVmId();
```

- *Type:* java.lang.String

---

##### `vmUuid`<sup>Required</sup> <a name="vmUuid" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid"></a>

```java
public java.lang.String getVmUuid();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermHybridComputeMachineAgentConfiguration <a name="DataAzurermHybridComputeMachineAgentConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfiguration;

DataAzurermHybridComputeMachineAgentConfiguration.builder()
    .build();
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct;

DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct.builder()
    .build();
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct;

DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct.builder()
    .build();
```


### DataAzurermHybridComputeMachineCloudMetadata <a name="DataAzurermHybridComputeMachineCloudMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineCloudMetadata;

DataAzurermHybridComputeMachineCloudMetadata.builder()
    .build();
```


### DataAzurermHybridComputeMachineConfig <a name="DataAzurermHybridComputeMachineConfig" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineConfig;

DataAzurermHybridComputeMachineConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermHybridComputeMachineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts"></a>

```java
public DataAzurermHybridComputeMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#timeouts DataAzurermHybridComputeMachine#timeouts}

---

### DataAzurermHybridComputeMachineErrorDetails <a name="DataAzurermHybridComputeMachineErrorDetails" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetails;

DataAzurermHybridComputeMachineErrorDetails.builder()
    .build();
```


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo;

DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo.builder()
    .build();
```


### DataAzurermHybridComputeMachineIdentity <a name="DataAzurermHybridComputeMachineIdentity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineIdentity;

DataAzurermHybridComputeMachineIdentity.builder()
    .build();
```


### DataAzurermHybridComputeMachineLocationData <a name="DataAzurermHybridComputeMachineLocationData" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineLocationData;

DataAzurermHybridComputeMachineLocationData.builder()
    .build();
```


### DataAzurermHybridComputeMachineOsProfile <a name="DataAzurermHybridComputeMachineOsProfile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfile;

DataAzurermHybridComputeMachineOsProfile.builder()
    .build();
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfiguration <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration;

DataAzurermHybridComputeMachineOsProfileLinuxConfiguration.builder()
    .build();
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings;

DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings.builder()
    .build();
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfiguration <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration;

DataAzurermHybridComputeMachineOsProfileWindowsConfiguration.builder()
    .build();
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings;

DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings.builder()
    .build();
```


### DataAzurermHybridComputeMachineServiceStatus <a name="DataAzurermHybridComputeMachineServiceStatus" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatus;

DataAzurermHybridComputeMachineServiceStatus.builder()
    .build();
```


### DataAzurermHybridComputeMachineServiceStatusExtensionService <a name="DataAzurermHybridComputeMachineServiceStatusExtensionService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusExtensionService;

DataAzurermHybridComputeMachineServiceStatusExtensionService.builder()
    .build();
```


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService;

DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService.builder()
    .build();
```


### DataAzurermHybridComputeMachineTimeouts <a name="DataAzurermHybridComputeMachineTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineTimeouts;

DataAzurermHybridComputeMachineTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList;

new DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference;

new DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList;

new DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference;

new DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationList <a name="DataAzurermHybridComputeMachineAgentConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationList;

new DataAzurermHybridComputeMachineAgentConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineAgentConfigurationOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference;

new DataAzurermHybridComputeMachineAgentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList">extensionsAllowList</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList">extensionsBlockList</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled">extensionsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts">incomingConnectionsPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass">proxyBypass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionsAllowList`<sup>Required</sup> <a name="extensionsAllowList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList getExtensionsAllowList();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a>

---

##### `extensionsBlockList`<sup>Required</sup> <a name="extensionsBlockList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList"></a>

```java
public DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList getExtensionsBlockList();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a>

---

##### `extensionsEnabled`<sup>Required</sup> <a name="extensionsEnabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled"></a>

```java
public IResolvable getExtensionsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `guestConfigurationEnabled`<sup>Required</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled"></a>

```java
public IResolvable getGuestConfigurationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `incomingConnectionsPorts`<sup>Required</sup> <a name="incomingConnectionsPorts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts"></a>

```java
public java.util.List<java.lang.String> getIncomingConnectionsPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proxyBypass`<sup>Required</sup> <a name="proxyBypass" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass"></a>

```java
public java.util.List<java.lang.String> getProxyBypass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineAgentConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a>

---


### DataAzurermHybridComputeMachineCloudMetadataList <a name="DataAzurermHybridComputeMachineCloudMetadataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineCloudMetadataList;

new DataAzurermHybridComputeMachineCloudMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get"></a>

```java
public DataAzurermHybridComputeMachineCloudMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineCloudMetadataOutputReference <a name="DataAzurermHybridComputeMachineCloudMetadataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineCloudMetadataOutputReference;

new DataAzurermHybridComputeMachineCloudMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineCloudMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a>

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList;

new DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get"></a>

```java
public DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference;

new DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info">info</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info"></a>

```java
public java.lang.String getInfo();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a>

---


### DataAzurermHybridComputeMachineErrorDetailsList <a name="DataAzurermHybridComputeMachineErrorDetailsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetailsList;

new DataAzurermHybridComputeMachineErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get"></a>

```java
public DataAzurermHybridComputeMachineErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineErrorDetailsOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineErrorDetailsOutputReference;

new DataAzurermHybridComputeMachineErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo">additionalInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo"></a>

```java
public DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList getAdditionalInfo();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a>

---


### DataAzurermHybridComputeMachineIdentityList <a name="DataAzurermHybridComputeMachineIdentityList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineIdentityList;

new DataAzurermHybridComputeMachineIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get"></a>

```java
public DataAzurermHybridComputeMachineIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineIdentityOutputReference <a name="DataAzurermHybridComputeMachineIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineIdentityOutputReference;

new DataAzurermHybridComputeMachineIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a>

---


### DataAzurermHybridComputeMachineLocationDataList <a name="DataAzurermHybridComputeMachineLocationDataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineLocationDataList;

new DataAzurermHybridComputeMachineLocationDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get"></a>

```java
public DataAzurermHybridComputeMachineLocationDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineLocationDataOutputReference <a name="DataAzurermHybridComputeMachineLocationDataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineLocationDataOutputReference;

new DataAzurermHybridComputeMachineLocationDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion">countryOrRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district">district</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `countryOrRegion`<sup>Required</sup> <a name="countryOrRegion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion"></a>

```java
public java.lang.String getCountryOrRegion();
```

- *Type:* java.lang.String

---

##### `district`<sup>Required</sup> <a name="district" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district"></a>

```java
public java.lang.String getDistrict();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineLocationData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList;

new DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference;

new DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings">patchSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchSettings`<sup>Required</sup> <a name="patchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList getPatchSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList;

new DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference;

new DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode">assessmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assessmentMode`<sup>Required</sup> <a name="assessmentMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```java
public java.lang.String getAssessmentMode();
```

- *Type:* java.lang.String

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineOsProfileList <a name="DataAzurermHybridComputeMachineOsProfileList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileList;

new DataAzurermHybridComputeMachineOsProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get"></a>

```java
public DataAzurermHybridComputeMachineOsProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineOsProfileOutputReference <a name="DataAzurermHybridComputeMachineOsProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileOutputReference;

new DataAzurermHybridComputeMachineOsProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName">computerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration">linuxConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration">windowsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName"></a>

```java
public java.lang.String getComputerName();
```

- *Type:* java.lang.String

---

##### `linuxConfiguration`<sup>Required</sup> <a name="linuxConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration"></a>

```java
public DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList getLinuxConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a>

---

##### `windowsConfiguration`<sup>Required</sup> <a name="windowsConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList getWindowsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineOsProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList;

new DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference;

new DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings">patchSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchSettings`<sup>Required</sup> <a name="patchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList getPatchSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList;

new DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference;

new DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode">assessmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode">patchMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assessmentMode`<sup>Required</sup> <a name="assessmentMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```java
public java.lang.String getAssessmentMode();
```

- *Type:* java.lang.String

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```java
public java.lang.String getPatchMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceList <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList;

new DataAzurermHybridComputeMachineServiceStatusExtensionServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference;

new DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType">startupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startupType`<sup>Required</sup> <a name="startupType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType"></a>

```java
public java.lang.String getStartupType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusExtensionService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a>

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList;

new DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference;

new DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType">startupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startupType`<sup>Required</sup> <a name="startupType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType"></a>

```java
public java.lang.String getStartupType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a>

---


### DataAzurermHybridComputeMachineServiceStatusList <a name="DataAzurermHybridComputeMachineServiceStatusList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusList;

new DataAzurermHybridComputeMachineServiceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermHybridComputeMachineServiceStatusOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineServiceStatusOutputReference;

new DataAzurermHybridComputeMachineServiceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService">extensionService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService">guestConfigurationService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionService`<sup>Required</sup> <a name="extensionService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusExtensionServiceList getExtensionService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a>

---

##### `guestConfigurationService`<sup>Required</sup> <a name="guestConfigurationService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService"></a>

```java
public DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList getGuestConfigurationService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue"></a>

```java
public DataAzurermHybridComputeMachineServiceStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a>

---


### DataAzurermHybridComputeMachineTimeoutsOutputReference <a name="DataAzurermHybridComputeMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_hybrid_compute_machine.DataAzurermHybridComputeMachineTimeoutsOutputReference;

new DataAzurermHybridComputeMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---



