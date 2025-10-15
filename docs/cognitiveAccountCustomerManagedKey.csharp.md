# `cognitiveAccountCustomerManagedKey` Submodule <a name="`cognitiveAccountCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountCustomerManagedKeyA <a name="CognitiveAccountCustomerManagedKeyA" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key azurerm_cognitive_account_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKeyA(Construct Scope, string Id, CognitiveAccountCustomerManagedKeyAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig">CognitiveAccountCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig">CognitiveAccountCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetIdentityClientId">ResetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts"></a>

```csharp
private void PutTimeouts(CognitiveAccountCustomerManagedKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityClientId` <a name="ResetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetIdentityClientId"></a>

```csharp
private void ResetIdentityClientId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitiveAccountCustomerManagedKeyA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccountCustomerManagedKeyA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccountCustomerManagedKeyA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccountCustomerManagedKeyA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CognitiveAccountCustomerManagedKeyA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitiveAccountCustomerManagedKeyA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountCustomerManagedKeyA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitiveAccountCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference">CognitiveAccountCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountIdInput">CognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientIdInput">IdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeouts"></a>

```csharp
public CognitiveAccountCustomerManagedKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference">CognitiveAccountCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `CognitiveAccountIdInput`<sup>Optional</sup> <a name="CognitiveAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountIdInput"></a>

```csharp
public string CognitiveAccountIdInput { get; }
```

- *Type:* string

---

##### `IdentityClientIdInput`<sup>Optional</sup> <a name="IdentityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientIdInput"></a>

```csharp
public string IdentityClientIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.timeoutsInput"></a>

```csharp
public IResolvable|CognitiveAccountCustomerManagedKeyTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountCustomerManagedKeyAConfig <a name="CognitiveAccountCustomerManagedKeyAConfig" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKeyAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CognitiveAccountId,
    string KeyVaultKeyId,
    string Id = null,
    string IdentityClientId = null,
    CognitiveAccountCustomerManagedKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#cognitive_account_id CognitiveAccountCustomerManagedKeyA#cognitive_account_id}.

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#key_vault_key_id CognitiveAccountCustomerManagedKeyA#key_vault_key_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#id CognitiveAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityClientId`<sup>Optional</sup> <a name="IdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#identity_client_id CognitiveAccountCustomerManagedKeyA#identity_client_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyAConfig.property.timeouts"></a>

```csharp
public CognitiveAccountCustomerManagedKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#timeouts CognitiveAccountCustomerManagedKeyA#timeouts}

---

### CognitiveAccountCustomerManagedKeyTimeouts <a name="CognitiveAccountCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#create CognitiveAccountCustomerManagedKeyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#delete CognitiveAccountCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#read CognitiveAccountCustomerManagedKeyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#update CognitiveAccountCustomerManagedKeyA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#create CognitiveAccountCustomerManagedKeyA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#delete CognitiveAccountCustomerManagedKeyA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#read CognitiveAccountCustomerManagedKeyA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/cognitive_account_customer_managed_key#update CognitiveAccountCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountCustomerManagedKeyTimeoutsOutputReference <a name="CognitiveAccountCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CognitiveAccountCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CognitiveAccountCustomerManagedKeyTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.cognitiveAccountCustomerManagedKey.CognitiveAccountCustomerManagedKeyTimeouts">CognitiveAccountCustomerManagedKeyTimeouts</a>

---



