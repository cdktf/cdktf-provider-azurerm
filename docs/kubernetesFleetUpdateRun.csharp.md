# `kubernetesFleetUpdateRun` Submodule <a name="`kubernetesFleetUpdateRun` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateRun <a name="KubernetesFleetUpdateRun" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run azurerm_kubernetes_fleet_update_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRun(Construct Scope, string Id, KubernetesFleetUpdateRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate">PutManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage">PutStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId">ResetFleetUpdateStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagedClusterUpdate` <a name="PutManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate"></a>

```csharp
private void PutManagedClusterUpdate(KubernetesFleetUpdateRunManagedClusterUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `PutStage` <a name="PutStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage"></a>

```csharp
private void PutStage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesFleetUpdateRunTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

---

##### `ResetFleetUpdateStrategyId` <a name="ResetFleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId"></a>

```csharp
private void ResetFleetUpdateStrategyId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateRun.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFleetUpdateRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFleetUpdateRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate">ManagedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage">Stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput">FleetUpdateStrategyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput">KubernetesFleetManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput">ManagedClusterUpdateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput">StageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId">FleetUpdateStrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManagedClusterUpdate`<sup>Required</sup> <a name="ManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateOutputReference ManagedClusterUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a>

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage"></a>

```csharp
public KubernetesFleetUpdateRunStageList Stage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts"></a>

```csharp
public KubernetesFleetUpdateRunTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a>

---

##### `FleetUpdateStrategyIdInput`<sup>Optional</sup> <a name="FleetUpdateStrategyIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput"></a>

```csharp
public string FleetUpdateStrategyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="KubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput"></a>

```csharp
public string KubernetesFleetManagerIdInput { get; }
```

- *Type:* string

---

##### `ManagedClusterUpdateInput`<sup>Optional</sup> <a name="ManagedClusterUpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdate ManagedClusterUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput"></a>

```csharp
public object StageInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FleetUpdateStrategyId`<sup>Required</sup> <a name="FleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId"></a>

```csharp
public string FleetUpdateStrategyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId"></a>

```csharp
public string KubernetesFleetManagerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateRunConfig <a name="KubernetesFleetUpdateRunConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KubernetesFleetManagerId,
    KubernetesFleetUpdateRunManagedClusterUpdate ManagedClusterUpdate,
    string Name,
    string FleetUpdateStrategyId = null,
    string Id = null,
    object Stage = null,
    KubernetesFleetUpdateRunTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate">ManagedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | managed_cluster_update block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId">FleetUpdateStrategyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage">Stage</a></code> | <code>object</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId"></a>

```csharp
public string KubernetesFleetManagerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}.

---

##### `ManagedClusterUpdate`<sup>Required</sup> <a name="ManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdate ManagedClusterUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

managed_cluster_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#managed_cluster_update KubernetesFleetUpdateRun#managed_cluster_update}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `FleetUpdateStrategyId`<sup>Optional</sup> <a name="FleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId"></a>

```csharp
public string FleetUpdateStrategyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage"></a>

```csharp
public object Stage { get; set; }
```

- *Type:* object

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#stage KubernetesFleetUpdateRun#stage}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts"></a>

```csharp
public KubernetesFleetUpdateRunTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#timeouts KubernetesFleetUpdateRun#timeouts}

---

### KubernetesFleetUpdateRunManagedClusterUpdate <a name="KubernetesFleetUpdateRunManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdate {
    KubernetesFleetUpdateRunManagedClusterUpdateUpgrade Upgrade,
    KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection NodeImageSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection">NodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | node_image_selection block. |

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateUpgrade Upgrade { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#upgrade KubernetesFleetUpdateRun#upgrade}

---

##### `NodeImageSelection`<sup>Optional</sup> <a name="NodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection NodeImageSelection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

node_image_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#node_image_selection KubernetesFleetUpdateRun#node_image_selection}

---

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

### KubernetesFleetUpdateRunManagedClusterUpdateUpgrade <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdateUpgrade {
    string Type,
    string KubernetesVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

##### `KubernetesVersion`<sup>Optional</sup> <a name="KubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}.

---

### KubernetesFleetUpdateRunStage <a name="KubernetesFleetUpdateRunStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStage {
    object Group,
    string Name,
    double AfterStageWaitInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group">Group</a></code> | <code>object</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group"></a>

```csharp
public object Group { get; set; }
```

- *Type:* object

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#group KubernetesFleetUpdateRun#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `AfterStageWaitInSeconds`<sup>Optional</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds"></a>

```csharp
public double AfterStageWaitInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateRunStageGroup <a name="KubernetesFleetUpdateRunStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStageGroup {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

### KubernetesFleetUpdateRunTimeouts <a name="KubernetesFleetUpdateRunTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection">PutNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade">PutUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection">ResetNodeImageSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeImageSelection` <a name="PutNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection"></a>

```csharp
private void PutNodeImageSelection(KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `PutUpgrade` <a name="PutUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade"></a>

```csharp
private void PutUpgrade(KubernetesFleetUpdateRunManagedClusterUpdateUpgrade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `ResetNodeImageSelection` <a name="ResetNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection"></a>

```csharp
private void ResetNodeImageSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection">NodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade">Upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput">NodeImageSelectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput">UpgradeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeImageSelection`<sup>Required</sup> <a name="NodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference NodeImageSelection { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a>

---

##### `Upgrade`<sup>Required</sup> <a name="Upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference Upgrade { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a>

---

##### `NodeImageSelectionInput`<sup>Optional</sup> <a name="NodeImageSelectionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection NodeImageSelectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `UpgradeInput`<sup>Optional</sup> <a name="UpgradeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateUpgrade UpgradeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion">ResetKubernetesVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKubernetesVersion` <a name="ResetKubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion"></a>

```csharp
private void ResetKubernetesVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput"></a>

```csharp
public string KubernetesVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue"></a>

```csharp
public KubernetesFleetUpdateRunManagedClusterUpdateUpgrade InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---


### KubernetesFleetUpdateRunStageGroupList <a name="KubernetesFleetUpdateRunStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStageGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get"></a>

```csharp
private KubernetesFleetUpdateRunStageGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateRunStageGroupOutputReference <a name="KubernetesFleetUpdateRunStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStageGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateRunStageList <a name="KubernetesFleetUpdateRunStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get"></a>

```csharp
private KubernetesFleetUpdateRunStageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateRunStageOutputReference <a name="KubernetesFleetUpdateRunStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds">ResetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup"></a>

```csharp
private void PutGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetAfterStageWaitInSeconds` <a name="ResetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds"></a>

```csharp
private void ResetAfterStageWaitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group">Group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput">AfterStageWaitInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput">GroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group"></a>

```csharp
public KubernetesFleetUpdateRunStageGroupList Group { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a>

---

##### `AfterStageWaitInSecondsInput`<sup>Optional</sup> <a name="AfterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```csharp
public double AfterStageWaitInSecondsInput { get; }
```

- *Type:* double

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput"></a>

```csharp
public object GroupInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AfterStageWaitInSeconds`<sup>Required</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds"></a>

```csharp
public double AfterStageWaitInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateRunTimeoutsOutputReference <a name="KubernetesFleetUpdateRunTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateRunTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



