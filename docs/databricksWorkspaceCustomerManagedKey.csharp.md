# `databricksWorkspaceCustomerManagedKey` Submodule <a name="`databricksWorkspaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspaceCustomerManagedKey <a name="DatabricksWorkspaceCustomerManagedKey" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key azurerm_databricks_workspace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomerManagedKey(Construct Scope, string Id, DatabricksWorkspaceCustomerManagedKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig">DatabricksWorkspaceCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig">DatabricksWorkspaceCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabricksWorkspaceCustomerManagedKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksWorkspaceCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceCustomerManagedKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceCustomerManagedKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceCustomerManagedKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceCustomerManagedKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabricksWorkspaceCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksWorkspaceCustomerManagedKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksWorkspaceCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspaceCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeouts"></a>

```csharp
public DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceCustomerManagedKeyConfig <a name="DatabricksWorkspaceCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomerManagedKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyVaultKeyId,
    string WorkspaceId,
    string Id = null,
    DatabricksWorkspaceCustomerManagedKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#key_vault_key_id DatabricksWorkspaceCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#workspace_id DatabricksWorkspaceCustomerManagedKey#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#id DatabricksWorkspaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#key_vault_key_id DatabricksWorkspaceCustomerManagedKey#key_vault_key_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#workspace_id DatabricksWorkspaceCustomerManagedKey#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#id DatabricksWorkspaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyConfig.property.timeouts"></a>

```csharp
public DatabricksWorkspaceCustomerManagedKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts">DatabricksWorkspaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#timeouts DatabricksWorkspaceCustomerManagedKey#timeouts}

---

### DatabricksWorkspaceCustomerManagedKeyTimeouts <a name="DatabricksWorkspaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomerManagedKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#create DatabricksWorkspaceCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#delete DatabricksWorkspaceCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#read DatabricksWorkspaceCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#update DatabricksWorkspaceCustomerManagedKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#create DatabricksWorkspaceCustomerManagedKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#delete DatabricksWorkspaceCustomerManagedKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#read DatabricksWorkspaceCustomerManagedKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_customer_managed_key#update DatabricksWorkspaceCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference <a name="DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspaceCustomerManagedKey.DatabricksWorkspaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



