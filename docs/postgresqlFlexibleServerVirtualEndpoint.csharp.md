# `postgresqlFlexibleServerVirtualEndpoint` Submodule <a name="`postgresqlFlexibleServerVirtualEndpoint` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServerVirtualEndpoint <a name="PostgresqlFlexibleServerVirtualEndpoint" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint azurerm_postgresql_flexible_server_virtual_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerVirtualEndpoint(Construct Scope, string Id, PostgresqlFlexibleServerVirtualEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig">PostgresqlFlexibleServerVirtualEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig">PostgresqlFlexibleServerVirtualEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(PostgresqlFlexibleServerVirtualEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServerVirtualEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerVirtualEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerVirtualEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerVirtualEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlFlexibleServerVirtualEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PostgresqlFlexibleServerVirtualEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlFlexibleServerVirtualEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlFlexibleServerVirtualEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServerVirtualEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference">PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerIdInput">ReplicaServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerIdInput">SourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerId">ReplicaServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerId">SourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeouts"></a>

```csharp
public PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference">PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicaServerIdInput`<sup>Optional</sup> <a name="ReplicaServerIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerIdInput"></a>

```csharp
public string ReplicaServerIdInput { get; }
```

- *Type:* string

---

##### `SourceServerIdInput`<sup>Optional</sup> <a name="SourceServerIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerIdInput"></a>

```csharp
public string SourceServerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplicaServerId`<sup>Required</sup> <a name="ReplicaServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.replicaServerId"></a>

```csharp
public string ReplicaServerId { get; }
```

- *Type:* string

---

##### `SourceServerId`<sup>Required</sup> <a name="SourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.sourceServerId"></a>

```csharp
public string SourceServerId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerVirtualEndpointConfig <a name="PostgresqlFlexibleServerVirtualEndpointConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerVirtualEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ReplicaServerId,
    string SourceServerId,
    string Type,
    string Id = null,
    PostgresqlFlexibleServerVirtualEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.name">Name</a></code> | <code>string</code> | The name of the Virtual Endpoint. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.replicaServerId">ReplicaServerId</a></code> | <code>string</code> | The Resource ID of the *Replica* Postgres Flexible Server this should be associated with. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.sourceServerId">SourceServerId</a></code> | <code>string</code> | The Resource ID of the *Source* Postgres Flexible Server this should be associated with. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.type">Type</a></code> | <code>string</code> | The type of Virtual Endpoint. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#id PostgresqlFlexibleServerVirtualEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Virtual Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#name PostgresqlFlexibleServerVirtualEndpoint#name}

---

##### `ReplicaServerId`<sup>Required</sup> <a name="ReplicaServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.replicaServerId"></a>

```csharp
public string ReplicaServerId { get; set; }
```

- *Type:* string

The Resource ID of the *Replica* Postgres Flexible Server this should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#replica_server_id PostgresqlFlexibleServerVirtualEndpoint#replica_server_id}

---

##### `SourceServerId`<sup>Required</sup> <a name="SourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.sourceServerId"></a>

```csharp
public string SourceServerId { get; set; }
```

- *Type:* string

The Resource ID of the *Source* Postgres Flexible Server this should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#source_server_id PostgresqlFlexibleServerVirtualEndpoint#source_server_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of Virtual Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#type PostgresqlFlexibleServerVirtualEndpoint#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#id PostgresqlFlexibleServerVirtualEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointConfig.property.timeouts"></a>

```csharp
public PostgresqlFlexibleServerVirtualEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts">PostgresqlFlexibleServerVirtualEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#timeouts PostgresqlFlexibleServerVirtualEndpoint#timeouts}

---

### PostgresqlFlexibleServerVirtualEndpointTimeouts <a name="PostgresqlFlexibleServerVirtualEndpointTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerVirtualEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#create PostgresqlFlexibleServerVirtualEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#delete PostgresqlFlexibleServerVirtualEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#read PostgresqlFlexibleServerVirtualEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#update PostgresqlFlexibleServerVirtualEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#create PostgresqlFlexibleServerVirtualEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#delete PostgresqlFlexibleServerVirtualEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#read PostgresqlFlexibleServerVirtualEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/postgresql_flexible_server_virtual_endpoint#update PostgresqlFlexibleServerVirtualEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference <a name="PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServerVirtualEndpoint.PostgresqlFlexibleServerVirtualEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



