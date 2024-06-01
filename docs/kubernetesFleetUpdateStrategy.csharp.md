# `kubernetesFleetUpdateStrategy` Submodule <a name="`kubernetesFleetUpdateStrategy` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateStrategy <a name="KubernetesFleetUpdateStrategy" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy azurerm_kubernetes_fleet_update_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategy(Construct Scope, string Id, KubernetesFleetUpdateStrategyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage">PutStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStage` <a name="PutStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage"></a>

```csharp
private void PutStage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesFleetUpdateStrategyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateStrategy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateStrategy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateStrategy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetUpdateStrategy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFleetUpdateStrategy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFleetUpdateStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage">Stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput">KubernetesFleetManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput">StageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage"></a>

```csharp
public KubernetesFleetUpdateStrategyStageList Stage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts"></a>

```csharp
public KubernetesFleetUpdateStrategyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="KubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput"></a>

```csharp
public string KubernetesFleetManagerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput"></a>

```csharp
public object StageInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId"></a>

```csharp
public string KubernetesFleetManagerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateStrategyConfig <a name="KubernetesFleetUpdateStrategyConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KubernetesFleetManagerId,
    string Name,
    object Stage,
    string Id = null,
    KubernetesFleetUpdateStrategyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId">KubernetesFleetManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage">Stage</a></code> | <code>object</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KubernetesFleetManagerId`<sup>Required</sup> <a name="KubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId"></a>

```csharp
public string KubernetesFleetManagerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage"></a>

```csharp
public object Stage { get; set; }
```

- *Type:* object

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#stage KubernetesFleetUpdateStrategy#stage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts"></a>

```csharp
public KubernetesFleetUpdateStrategyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#timeouts KubernetesFleetUpdateStrategy#timeouts}

---

### KubernetesFleetUpdateStrategyStage <a name="KubernetesFleetUpdateStrategyStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStage {
    object Group,
    string Name,
    double AfterStageWaitInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group">Group</a></code> | <code>object</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group"></a>

```csharp
public object Group { get; set; }
```

- *Type:* object

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#group KubernetesFleetUpdateStrategy#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `AfterStageWaitInSeconds`<sup>Optional</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds"></a>

```csharp
public double AfterStageWaitInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateStrategyStageGroup <a name="KubernetesFleetUpdateStrategyStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStageGroup {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

### KubernetesFleetUpdateStrategyTimeouts <a name="KubernetesFleetUpdateStrategyTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateStrategyStageGroupList <a name="KubernetesFleetUpdateStrategyStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStageGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get"></a>

```csharp
private KubernetesFleetUpdateStrategyStageGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateStrategyStageGroupOutputReference <a name="KubernetesFleetUpdateStrategyStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStageGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateStrategyStageList <a name="KubernetesFleetUpdateStrategyStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get"></a>

```csharp
private KubernetesFleetUpdateStrategyStageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateStrategyStageOutputReference <a name="KubernetesFleetUpdateStrategyStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds">ResetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup"></a>

```csharp
private void PutGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetAfterStageWaitInSeconds` <a name="ResetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds"></a>

```csharp
private void ResetAfterStageWaitInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group">Group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput">AfterStageWaitInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput">GroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds">AfterStageWaitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group"></a>

```csharp
public KubernetesFleetUpdateStrategyStageGroupList Group { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a>

---

##### `AfterStageWaitInSecondsInput`<sup>Optional</sup> <a name="AfterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```csharp
public double AfterStageWaitInSecondsInput { get; }
```

- *Type:* double

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput"></a>

```csharp
public object GroupInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AfterStageWaitInSeconds`<sup>Required</sup> <a name="AfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds"></a>

```csharp
public double AfterStageWaitInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFleetUpdateStrategyTimeoutsOutputReference <a name="KubernetesFleetUpdateStrategyTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetUpdateStrategyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



