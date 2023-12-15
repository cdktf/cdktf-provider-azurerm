# `containerAppEnvironmentDaprComponent` Submodule <a name="`containerAppEnvironmentDaprComponent` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentDaprComponent <a name="ContainerAppEnvironmentDaprComponent" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component azurerm_container_app_environment_dapr_component}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponent(Construct Scope, string Id, ContainerAppEnvironmentDaprComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig">ContainerAppEnvironmentDaprComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig">ContainerAppEnvironmentDaprComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors">ResetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout">ResetInitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata"></a>

```csharp
private void PutMetadata(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata.parameter.value"></a>

- *Type:* object

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAppEnvironmentDaprComponentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreErrors` <a name="ResetIgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors"></a>

```csharp
private void ResetIgnoreErrors()
```

##### `ResetInitTimeout` <a name="ResetInitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout"></a>

```csharp
private void ResetInitTimeout()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentDaprComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentDaprComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentDaprComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentDaprComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppEnvironmentDaprComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppEnvironmentDaprComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentDaprComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput">ComponentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput">IgnoreErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput">InitTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput">MetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors">IgnoreErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout">InitTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata"></a>

```csharp
public ContainerAppEnvironmentDaprComponentMetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret"></a>

```csharp
public ContainerAppEnvironmentDaprComponentSecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentDaprComponentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a>

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput"></a>

```csharp
public string ComponentTypeInput { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput"></a>

```csharp
public string ContainerAppEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreErrorsInput`<sup>Optional</sup> <a name="IgnoreErrorsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput"></a>

```csharp
public object IgnoreErrorsInput { get; }
```

- *Type:* object

---

##### `InitTimeoutInput`<sup>Optional</sup> <a name="InitTimeoutInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput"></a>

```csharp
public string InitTimeoutInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput"></a>

```csharp
public object MetadataInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreErrors`<sup>Required</sup> <a name="IgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors"></a>

```csharp
public object IgnoreErrors { get; }
```

- *Type:* object

---

##### `InitTimeout`<sup>Required</sup> <a name="InitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout"></a>

```csharp
public string InitTimeout { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentDaprComponentConfig <a name="ContainerAppEnvironmentDaprComponentConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComponentType,
    string ContainerAppEnvironmentId,
    string Name,
    string Version,
    string Id = null,
    object IgnoreErrors = null,
    string InitTimeout = null,
    object Metadata = null,
    string[] Scopes = null,
    object Secret = null,
    ContainerAppEnvironmentDaprComponentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType">ComponentType</a></code> | <code>string</code> | The Dapr Component Type. For example `state.azure.blobstorage`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | The Container App Managed Environment ID to configure this Dapr component on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name">Name</a></code> | <code>string</code> | The name for this Dapr Component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version">Version</a></code> | <code>string</code> | The version of the component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors">IgnoreErrors</a></code> | <code>object</code> | Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout">InitTimeout</a></code> | <code>string</code> | The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata">Metadata</a></code> | <code>object</code> | metadata block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType"></a>

```csharp
public string ComponentType { get; set; }
```

- *Type:* string

The Dapr Component Type. For example `state.azure.blobstorage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#component_type ContainerAppEnvironmentDaprComponent#component_type}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; set; }
```

- *Type:* string

The Container App Managed Environment ID to configure this Dapr component on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#container_app_environment_id ContainerAppEnvironmentDaprComponent#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this Dapr Component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#version ContainerAppEnvironmentDaprComponent#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreErrors`<sup>Optional</sup> <a name="IgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors"></a>

```csharp
public object IgnoreErrors { get; set; }
```

- *Type:* object

Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#ignore_errors ContainerAppEnvironmentDaprComponent#ignore_errors}

---

##### `InitTimeout`<sup>Optional</sup> <a name="InitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout"></a>

```csharp
public string InitTimeout { get; set; }
```

- *Type:* string

The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#init_timeout ContainerAppEnvironmentDaprComponent#init_timeout}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata"></a>

```csharp
public object Metadata { get; set; }
```

- *Type:* object

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#metadata ContainerAppEnvironmentDaprComponent#metadata}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#scopes ContainerAppEnvironmentDaprComponent#scopes}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#secret ContainerAppEnvironmentDaprComponent#secret}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentDaprComponentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#timeouts ContainerAppEnvironmentDaprComponent#timeouts}

---

### ContainerAppEnvironmentDaprComponentMetadata <a name="ContainerAppEnvironmentDaprComponentMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentMetadata {
    string Name,
    string SecretName = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name">Name</a></code> | <code>string</code> | The name of the Metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName">SecretName</a></code> | <code>string</code> | The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value">Value</a></code> | <code>string</code> | The value for this metadata configuration item. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#secret_name ContainerAppEnvironmentDaprComponent#secret_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentSecret <a name="ContainerAppEnvironmentDaprComponentSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentSecret {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name">Name</a></code> | <code>string</code> | The Secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value">Value</a></code> | <code>string</code> | The value for this secret. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentTimeouts <a name="ContainerAppEnvironmentDaprComponentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentDaprComponentMetadataList <a name="ContainerAppEnvironmentDaprComponentMetadataList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get"></a>

```csharp
private ContainerAppEnvironmentDaprComponentMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppEnvironmentDaprComponentMetadataOutputReference <a name="ContainerAppEnvironmentDaprComponentMetadataOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppEnvironmentDaprComponentSecretList <a name="ContainerAppEnvironmentDaprComponentSecretList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get"></a>

```csharp
private ContainerAppEnvironmentDaprComponentSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppEnvironmentDaprComponentSecretOutputReference <a name="ContainerAppEnvironmentDaprComponentSecretOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerAppEnvironmentDaprComponentTimeoutsOutputReference <a name="ContainerAppEnvironmentDaprComponentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentDaprComponentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



