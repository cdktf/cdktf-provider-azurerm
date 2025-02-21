# `redhatOpenshiftCluster` Submodule <a name="`redhatOpenshiftCluster` Submodule" id="@cdktf/provider-azurerm.redhatOpenshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedhatOpenshiftCluster <a name="RedhatOpenshiftCluster" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster azurerm_redhat_openshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftCluster(Construct Scope, string Id, RedhatOpenshiftClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig">RedhatOpenshiftClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig">RedhatOpenshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile">PutApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile">PutClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile">PutIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile">PutMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile">PutNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal">PutServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile">PutWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiServerProfile` <a name="PutApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile"></a>

```csharp
private void PutApiServerProfile(RedhatOpenshiftClusterApiServerProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `PutClusterProfile` <a name="PutClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile"></a>

```csharp
private void PutClusterProfile(RedhatOpenshiftClusterClusterProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `PutIngressProfile` <a name="PutIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile"></a>

```csharp
private void PutIngressProfile(RedhatOpenshiftClusterIngressProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `PutMainProfile` <a name="PutMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile"></a>

```csharp
private void PutMainProfile(RedhatOpenshiftClusterMainProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `PutNetworkProfile` <a name="PutNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile"></a>

```csharp
private void PutNetworkProfile(RedhatOpenshiftClusterNetworkProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `PutServicePrincipal` <a name="PutServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal"></a>

```csharp
private void PutServicePrincipal(RedhatOpenshiftClusterServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(RedhatOpenshiftClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

---

##### `PutWorkerProfile` <a name="PutWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile"></a>

```csharp
private void PutWorkerProfile(RedhatOpenshiftClusterWorkerProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedhatOpenshiftCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedhatOpenshiftCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedhatOpenshiftCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedhatOpenshiftCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedhatOpenshiftCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedhatOpenshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedhatOpenshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile">ApiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile">ClusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile">IngressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile">MainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile">WorkerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput">ApiServerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput">ClusterProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput">IngressProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput">MainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput">NetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput">WorkerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiServerProfile`<sup>Required</sup> <a name="ApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile"></a>

```csharp
public RedhatOpenshiftClusterApiServerProfileOutputReference ApiServerProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a>

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile"></a>

```csharp
public RedhatOpenshiftClusterClusterProfileOutputReference ClusterProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a>

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; }
```

- *Type:* string

---

##### `IngressProfile`<sup>Required</sup> <a name="IngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile"></a>

```csharp
public RedhatOpenshiftClusterIngressProfileOutputReference IngressProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a>

---

##### `MainProfile`<sup>Required</sup> <a name="MainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile"></a>

```csharp
public RedhatOpenshiftClusterMainProfileOutputReference MainProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a>

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile"></a>

```csharp
public RedhatOpenshiftClusterNetworkProfileOutputReference NetworkProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a>

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal"></a>

```csharp
public RedhatOpenshiftClusterServicePrincipalOutputReference ServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts"></a>

```csharp
public RedhatOpenshiftClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a>

---

##### `WorkerProfile`<sup>Required</sup> <a name="WorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile"></a>

```csharp
public RedhatOpenshiftClusterWorkerProfileOutputReference WorkerProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a>

---

##### `ApiServerProfileInput`<sup>Optional</sup> <a name="ApiServerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput"></a>

```csharp
public RedhatOpenshiftClusterApiServerProfile ApiServerProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `ClusterProfileInput`<sup>Optional</sup> <a name="ClusterProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput"></a>

```csharp
public RedhatOpenshiftClusterClusterProfile ClusterProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressProfileInput`<sup>Optional</sup> <a name="IngressProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput"></a>

```csharp
public RedhatOpenshiftClusterIngressProfile IngressProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MainProfileInput`<sup>Optional</sup> <a name="MainProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput"></a>

```csharp
public RedhatOpenshiftClusterMainProfile MainProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput"></a>

```csharp
public RedhatOpenshiftClusterNetworkProfile NetworkProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput"></a>

```csharp
public RedhatOpenshiftClusterServicePrincipal ServicePrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkerProfileInput`<sup>Optional</sup> <a name="WorkerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput"></a>

```csharp
public RedhatOpenshiftClusterWorkerProfile WorkerProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedhatOpenshiftClusterApiServerProfile <a name="RedhatOpenshiftClusterApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterApiServerProfile {
    string Visibility
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility">Visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterClusterProfile <a name="RedhatOpenshiftClusterClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterClusterProfile {
    string Domain,
    string Version,
    object FipsEnabled = null,
    string ManagedResourceGroupName = null,
    string PullSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret">PullSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}.

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}.

---

##### `PullSecret`<sup>Optional</sup> <a name="PullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret"></a>

```csharp
public string PullSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}.

---

### RedhatOpenshiftClusterConfig <a name="RedhatOpenshiftClusterConfig" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    RedhatOpenshiftClusterApiServerProfile ApiServerProfile,
    RedhatOpenshiftClusterClusterProfile ClusterProfile,
    RedhatOpenshiftClusterIngressProfile IngressProfile,
    string Location,
    RedhatOpenshiftClusterMainProfile MainProfile,
    string Name,
    RedhatOpenshiftClusterNetworkProfile NetworkProfile,
    string ResourceGroupName,
    RedhatOpenshiftClusterServicePrincipal ServicePrincipal,
    RedhatOpenshiftClusterWorkerProfile WorkerProfile,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RedhatOpenshiftClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile">ApiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile">ClusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile">IngressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile">MainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile">WorkerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiServerProfile`<sup>Required</sup> <a name="ApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile"></a>

```csharp
public RedhatOpenshiftClusterApiServerProfile ApiServerProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile"></a>

```csharp
public RedhatOpenshiftClusterClusterProfile ClusterProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `IngressProfile`<sup>Required</sup> <a name="IngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile"></a>

```csharp
public RedhatOpenshiftClusterIngressProfile IngressProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `MainProfile`<sup>Required</sup> <a name="MainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile"></a>

```csharp
public RedhatOpenshiftClusterMainProfile MainProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile"></a>

```csharp
public RedhatOpenshiftClusterNetworkProfile NetworkProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal"></a>

```csharp
public RedhatOpenshiftClusterServicePrincipal ServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `WorkerProfile`<sup>Required</sup> <a name="WorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile"></a>

```csharp
public RedhatOpenshiftClusterWorkerProfile WorkerProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts"></a>

```csharp
public RedhatOpenshiftClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

### RedhatOpenshiftClusterIngressProfile <a name="RedhatOpenshiftClusterIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterIngressProfile {
    string Visibility
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility">Visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterMainProfile <a name="RedhatOpenshiftClusterMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterMainProfile {
    string SubnetId,
    string VmSize,
    string DiskEncryptionSetId = null,
    object EncryptionAtHostEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

### RedhatOpenshiftClusterNetworkProfile <a name="RedhatOpenshiftClusterNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterNetworkProfile {
    string PodCidr,
    string ServiceCidr,
    string OutboundType = null,
    object PreconfiguredNetworkSecurityGroupEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr">PodCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr">ServiceCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType">OutboundType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled">PreconfiguredNetworkSecurityGroupEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}. |

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr"></a>

```csharp
public string PodCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}.

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr"></a>

```csharp
public string ServiceCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}.

---

##### `OutboundType`<sup>Optional</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType"></a>

```csharp
public string OutboundType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}.

---

##### `PreconfiguredNetworkSecurityGroupEnabled`<sup>Optional</sup> <a name="PreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```csharp
public object PreconfiguredNetworkSecurityGroupEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}.

---

### RedhatOpenshiftClusterServicePrincipal <a name="RedhatOpenshiftClusterServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterServicePrincipal {
    string ClientId,
    string ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}.

---

### RedhatOpenshiftClusterTimeouts <a name="RedhatOpenshiftClusterTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}.

---

### RedhatOpenshiftClusterWorkerProfile <a name="RedhatOpenshiftClusterWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterWorkerProfile {
    double DiskSizeGb,
    double NodeCount,
    string SubnetId,
    string VmSize,
    string DiskEncryptionSetId = null,
    object EncryptionAtHostEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize">VmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `EncryptionAtHostEnabled`<sup>Optional</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedhatOpenshiftClusterApiServerProfileOutputReference <a name="RedhatOpenshiftClusterApiServerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterApiServerProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterApiServerProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---


### RedhatOpenshiftClusterClusterProfileOutputReference <a name="RedhatOpenshiftClusterClusterProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterClusterProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret">ResetPullSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName"></a>

```csharp
private void ResetManagedResourceGroupName()
```

##### `ResetPullSecret` <a name="ResetPullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret"></a>

```csharp
private void ResetPullSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput">PullSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret">PullSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput"></a>

```csharp
public object FipsEnabledInput { get; }
```

- *Type:* object

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput"></a>

```csharp
public string ManagedResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `PullSecretInput`<sup>Optional</sup> <a name="PullSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput"></a>

```csharp
public string PullSecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; }
```

- *Type:* object

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; }
```

- *Type:* string

---

##### `PullSecret`<sup>Required</sup> <a name="PullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret"></a>

```csharp
public string PullSecret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterClusterProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---


### RedhatOpenshiftClusterIngressProfileOutputReference <a name="RedhatOpenshiftClusterIngressProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterIngressProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterIngressProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---


### RedhatOpenshiftClusterMainProfileOutputReference <a name="RedhatOpenshiftClusterMainProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterMainProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterMainProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---


### RedhatOpenshiftClusterNetworkProfileOutputReference <a name="RedhatOpenshiftClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterNetworkProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType">ResetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled">ResetPreconfiguredNetworkSecurityGroupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutboundType` <a name="ResetOutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType"></a>

```csharp
private void ResetOutboundType()
```

##### `ResetPreconfiguredNetworkSecurityGroupEnabled` <a name="ResetPreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled"></a>

```csharp
private void ResetPreconfiguredNetworkSecurityGroupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput">OutboundTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput">PodCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput">PreconfiguredNetworkSecurityGroupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput">ServiceCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType">OutboundType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr">PodCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled">PreconfiguredNetworkSecurityGroupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr">ServiceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutboundTypeInput`<sup>Optional</sup> <a name="OutboundTypeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput"></a>

```csharp
public string OutboundTypeInput { get; }
```

- *Type:* string

---

##### `PodCidrInput`<sup>Optional</sup> <a name="PodCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput"></a>

```csharp
public string PodCidrInput { get; }
```

- *Type:* string

---

##### `PreconfiguredNetworkSecurityGroupEnabledInput`<sup>Optional</sup> <a name="PreconfiguredNetworkSecurityGroupEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput"></a>

```csharp
public object PreconfiguredNetworkSecurityGroupEnabledInput { get; }
```

- *Type:* object

---

##### `ServiceCidrInput`<sup>Optional</sup> <a name="ServiceCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput"></a>

```csharp
public string ServiceCidrInput { get; }
```

- *Type:* string

---

##### `OutboundType`<sup>Required</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType"></a>

```csharp
public string OutboundType { get; }
```

- *Type:* string

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr"></a>

```csharp
public string PodCidr { get; }
```

- *Type:* string

---

##### `PreconfiguredNetworkSecurityGroupEnabled`<sup>Required</sup> <a name="PreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```csharp
public object PreconfiguredNetworkSecurityGroupEnabled { get; }
```

- *Type:* object

---

##### `ServiceCidr`<sup>Required</sup> <a name="ServiceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```csharp
public string ServiceCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterNetworkProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---


### RedhatOpenshiftClusterServicePrincipalOutputReference <a name="RedhatOpenshiftClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterServicePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---


### RedhatOpenshiftClusterTimeoutsOutputReference <a name="RedhatOpenshiftClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RedhatOpenshiftClusterWorkerProfileOutputReference <a name="RedhatOpenshiftClusterWorkerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedhatOpenshiftClusterWorkerProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled">ResetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId"></a>

```csharp
private void ResetDiskEncryptionSetId()
```

##### `ResetEncryptionAtHostEnabled` <a name="ResetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```csharp
private void ResetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput">EncryptionAtHostEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled">EncryptionAtHostEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```csharp
public string DiskEncryptionSetIdInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `EncryptionAtHostEnabledInput`<sup>Optional</sup> <a name="EncryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```csharp
public object EncryptionAtHostEnabledInput { get; }
```

- *Type:* object

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId"></a>

```csharp
public string DiskEncryptionSetId { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EncryptionAtHostEnabled`<sup>Required</sup> <a name="EncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled"></a>

```csharp
public object EncryptionAtHostEnabled { get; }
```

- *Type:* object

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue"></a>

```csharp
public RedhatOpenshiftClusterWorkerProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---



