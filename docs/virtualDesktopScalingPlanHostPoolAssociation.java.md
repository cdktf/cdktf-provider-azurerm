# `virtualDesktopScalingPlanHostPoolAssociation` Submodule <a name="`virtualDesktopScalingPlanHostPoolAssociation` Submodule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopScalingPlanHostPoolAssociation <a name="VirtualDesktopScalingPlanHostPoolAssociation" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association azurerm_virtual_desktop_scaling_plan_host_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociation;

VirtualDesktopScalingPlanHostPoolAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .hostPoolId(java.lang.String)
    .scalingPlanId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualDesktopScalingPlanHostPoolAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.hostPoolId">hostPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scalingPlanId">scalingPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}.

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.hostPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}.

---

##### `scalingPlanId`<sup>Required</sup> <a name="scalingPlanId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scalingPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#timeouts VirtualDesktopScalingPlanHostPoolAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts"></a>

```java
public void putTimeouts(VirtualDesktopScalingPlanHostPoolAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopScalingPlanHostPoolAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociation;

VirtualDesktopScalingPlanHostPoolAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociation;

VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociation;

VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociation;

VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualDesktopScalingPlanHostPoolAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualDesktopScalingPlanHostPoolAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualDesktopScalingPlanHostPoolAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopScalingPlanHostPoolAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference">VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolIdInput">hostPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanIdInput">scalingPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolId">hostPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanId">scalingPlanId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeouts"></a>

```java
public VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference">VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostPoolIdInput`<sup>Optional</sup> <a name="hostPoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolIdInput"></a>

```java
public java.lang.String getHostPoolIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scalingPlanIdInput`<sup>Optional</sup> <a name="scalingPlanIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanIdInput"></a>

```java
public java.lang.String getScalingPlanIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolId"></a>

```java
public java.lang.String getHostPoolId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scalingPlanId`<sup>Required</sup> <a name="scalingPlanId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanId"></a>

```java
public java.lang.String getScalingPlanId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopScalingPlanHostPoolAssociationConfig <a name="VirtualDesktopScalingPlanHostPoolAssociationConfig" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociationConfig;

VirtualDesktopScalingPlanHostPoolAssociationConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .hostPoolId(java.lang.String)
    .scalingPlanId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualDesktopScalingPlanHostPoolAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.hostPoolId">hostPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.scalingPlanId">scalingPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}.

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.hostPoolId"></a>

```java
public java.lang.String getHostPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}.

---

##### `scalingPlanId`<sup>Required</sup> <a name="scalingPlanId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.scalingPlanId"></a>

```java
public java.lang.String getScalingPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.timeouts"></a>

```java
public VirtualDesktopScalingPlanHostPoolAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#timeouts VirtualDesktopScalingPlanHostPoolAssociation#timeouts}

---

### VirtualDesktopScalingPlanHostPoolAssociationTimeouts <a name="VirtualDesktopScalingPlanHostPoolAssociationTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociationTimeouts;

VirtualDesktopScalingPlanHostPoolAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#create VirtualDesktopScalingPlanHostPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#delete VirtualDesktopScalingPlanHostPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#read VirtualDesktopScalingPlanHostPoolAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#update VirtualDesktopScalingPlanHostPoolAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#create VirtualDesktopScalingPlanHostPoolAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#delete VirtualDesktopScalingPlanHostPoolAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#read VirtualDesktopScalingPlanHostPoolAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#update VirtualDesktopScalingPlanHostPoolAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference <a name="VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_desktop_scaling_plan_host_pool_association.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference;

new VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---



