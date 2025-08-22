# `policyVirtualMachineConfigurationAssignment` Submodule <a name="`policyVirtualMachineConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyVirtualMachineConfigurationAssignment <a name="PolicyVirtualMachineConfigurationAssignment" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment azurerm_policy_virtual_machine_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignment;

PolicyVirtualMachineConfigurationAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .configuration(PolicyVirtualMachineConfigurationAssignmentConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PolicyVirtualMachineConfigurationAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#configuration PolicyVirtualMachineConfigurationAssignment#configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration"></a>

```java
public void putConfiguration(PolicyVirtualMachineConfigurationAssignmentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts"></a>

```java
public void putTimeouts(PolicyVirtualMachineConfigurationAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignment;

PolicyVirtualMachineConfigurationAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignment;

PolicyVirtualMachineConfigurationAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignment;

PolicyVirtualMachineConfigurationAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignment;

PolicyVirtualMachineConfigurationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyVirtualMachineConfigurationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyVirtualMachineConfigurationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyVirtualMachineConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyVirtualMachineConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configuration"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference">PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeouts"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.configurationInput"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyVirtualMachineConfigurationAssignmentConfig <a name="PolicyVirtualMachineConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfig;

PolicyVirtualMachineConfigurationAssignmentConfig.builder()
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
    .configuration(PolicyVirtualMachineConfigurationAssignmentConfiguration)
    .location(java.lang.String)
    .name(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PolicyVirtualMachineConfigurationAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.configuration"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#configuration PolicyVirtualMachineConfigurationAssignment#configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#location PolicyVirtualMachineConfigurationAssignment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#id PolicyVirtualMachineConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}

---

### PolicyVirtualMachineConfigurationAssignmentConfiguration <a name="PolicyVirtualMachineConfigurationAssignmentConfiguration" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfiguration;

PolicyVirtualMachineConfigurationAssignmentConfiguration.builder()
//  .assignmentType(java.lang.String)
//  .contentHash(java.lang.String)
//  .contentUri(java.lang.String)
//  .parameter(IResolvable)
//  .parameter(java.util.List<PolicyVirtualMachineConfigurationAssignmentConfigurationParameter>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash">contentHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri">contentUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}. |

---

##### `assignmentType`<sup>Optional</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#assignment_type PolicyVirtualMachineConfigurationAssignment#assignment_type}.

---

##### `contentHash`<sup>Optional</sup> <a name="contentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentHash"></a>

```java
public java.lang.String getContentHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#content_hash PolicyVirtualMachineConfigurationAssignment#content_hash}.

---

##### `contentUri`<sup>Optional</sup> <a name="contentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.contentUri"></a>

```java
public java.lang.String getContentUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#content_uri PolicyVirtualMachineConfigurationAssignment#content_uri}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#parameter PolicyVirtualMachineConfigurationAssignment#parameter}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#version PolicyVirtualMachineConfigurationAssignment#version}.

---

### PolicyVirtualMachineConfigurationAssignmentConfigurationParameter <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter;

PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#name PolicyVirtualMachineConfigurationAssignment#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#value PolicyVirtualMachineConfigurationAssignment#value}.

---

### PolicyVirtualMachineConfigurationAssignmentTimeouts <a name="PolicyVirtualMachineConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentTimeouts;

PolicyVirtualMachineConfigurationAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#create PolicyVirtualMachineConfigurationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#delete PolicyVirtualMachineConfigurationAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#read PolicyVirtualMachineConfigurationAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/policy_virtual_machine_configuration_assignment#update PolicyVirtualMachineConfigurationAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference;

new PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType">resetAssignmentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash">resetContentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri">resetContentUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<PolicyVirtualMachineConfigurationAssignmentConfigurationParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>>

---

##### `resetAssignmentType` <a name="resetAssignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetAssignmentType"></a>

```java
public void resetAssignmentType()
```

##### `resetContentHash` <a name="resetContentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentHash"></a>

```java
public void resetContentHash()
```

##### `resetContentUri` <a name="resetContentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetContentUri"></a>

```java
public void resetContentUri()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput">assignmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput">contentHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput">contentUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType">assignmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash">contentHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri">contentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameter"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList">PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList</a>

---

##### `assignmentTypeInput`<sup>Optional</sup> <a name="assignmentTypeInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentTypeInput"></a>

```java
public java.lang.String getAssignmentTypeInput();
```

- *Type:* java.lang.String

---

##### `contentHashInput`<sup>Optional</sup> <a name="contentHashInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHashInput"></a>

```java
public java.lang.String getContentHashInput();
```

- *Type:* java.lang.String

---

##### `contentUriInput`<sup>Optional</sup> <a name="contentUriInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUriInput"></a>

```java
public java.lang.String getContentUriInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.assignmentType"></a>

```java
public java.lang.String getAssignmentType();
```

- *Type:* java.lang.String

---

##### `contentHash`<sup>Required</sup> <a name="contentHash" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentHash"></a>

```java
public java.lang.String getContentHash();
```

- *Type:* java.lang.String

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.contentUri"></a>

```java
public java.lang.String getContentUri();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationOutputReference.property.internalValue"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfiguration">PolicyVirtualMachineConfigurationAssignmentConfiguration</a>

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList;

new PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get"></a>

```java
public PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>>

---


### PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference;

new PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentConfigurationParameter">PolicyVirtualMachineConfigurationAssignmentConfigurationParameter</a>

---


### PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference <a name="PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.policy_virtual_machine_configuration_assignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference;

new PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.policyVirtualMachineConfigurationAssignment.PolicyVirtualMachineConfigurationAssignmentTimeouts">PolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---



