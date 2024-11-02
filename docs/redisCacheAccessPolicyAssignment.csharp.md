# `redisCacheAccessPolicyAssignment` Submodule <a name="`redisCacheAccessPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCacheAccessPolicyAssignment <a name="RedisCacheAccessPolicyAssignment" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment azurerm_redis_cache_access_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheAccessPolicyAssignment(Construct Scope, string Id, RedisCacheAccessPolicyAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig">RedisCacheAccessPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig">RedisCacheAccessPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(RedisCacheAccessPolicyAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCacheAccessPolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCacheAccessPolicyAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCacheAccessPolicyAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCacheAccessPolicyAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

RedisCacheAccessPolicyAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RedisCacheAccessPolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisCacheAccessPolicyAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisCacheAccessPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RedisCacheAccessPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference">RedisCacheAccessPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyNameInput">AccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAliasInput">ObjectIdAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheIdInput">RedisCacheIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAlias">ObjectIdAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheId">RedisCacheId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeouts"></a>

```csharp
public RedisCacheAccessPolicyAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference">RedisCacheAccessPolicyAssignmentTimeoutsOutputReference</a>

---

##### `AccessPolicyNameInput`<sup>Optional</sup> <a name="AccessPolicyNameInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyNameInput"></a>

```csharp
public string AccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectIdAliasInput`<sup>Optional</sup> <a name="ObjectIdAliasInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAliasInput"></a>

```csharp
public string ObjectIdAliasInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `RedisCacheIdInput`<sup>Optional</sup> <a name="RedisCacheIdInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheIdInput"></a>

```csharp
public string RedisCacheIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectIdAlias`<sup>Required</sup> <a name="ObjectIdAlias" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.objectIdAlias"></a>

```csharp
public string ObjectIdAlias { get; }
```

- *Type:* string

---

##### `RedisCacheId`<sup>Required</sup> <a name="RedisCacheId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.redisCacheId"></a>

```csharp
public string RedisCacheId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheAccessPolicyAssignmentConfig <a name="RedisCacheAccessPolicyAssignmentConfig" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheAccessPolicyAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessPolicyName,
    string Name,
    string ObjectId,
    string ObjectIdAlias,
    string RedisCacheId,
    string Id = null,
    RedisCacheAccessPolicyAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectIdAlias">ObjectIdAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.redisCacheId">RedisCacheId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#access_policy_name RedisCacheAccessPolicyAssignment#access_policy_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#name RedisCacheAccessPolicyAssignment#name}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#object_id RedisCacheAccessPolicyAssignment#object_id}.

---

##### `ObjectIdAlias`<sup>Required</sup> <a name="ObjectIdAlias" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.objectIdAlias"></a>

```csharp
public string ObjectIdAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#object_id_alias RedisCacheAccessPolicyAssignment#object_id_alias}.

---

##### `RedisCacheId`<sup>Required</sup> <a name="RedisCacheId" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.redisCacheId"></a>

```csharp
public string RedisCacheId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#redis_cache_id RedisCacheAccessPolicyAssignment#redis_cache_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#id RedisCacheAccessPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentConfig.property.timeouts"></a>

```csharp
public RedisCacheAccessPolicyAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts">RedisCacheAccessPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#timeouts RedisCacheAccessPolicyAssignment#timeouts}

---

### RedisCacheAccessPolicyAssignmentTimeouts <a name="RedisCacheAccessPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheAccessPolicyAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#create RedisCacheAccessPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#delete RedisCacheAccessPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#read RedisCacheAccessPolicyAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#create RedisCacheAccessPolicyAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#delete RedisCacheAccessPolicyAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/redis_cache_access_policy_assignment#read RedisCacheAccessPolicyAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheAccessPolicyAssignmentTimeoutsOutputReference <a name="RedisCacheAccessPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new RedisCacheAccessPolicyAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.redisCacheAccessPolicyAssignment.RedisCacheAccessPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



