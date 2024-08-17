# `sqlActiveDirectoryAdministrator` Submodule <a name="`sqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlActiveDirectoryAdministrator <a name="SqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator azurerm_sql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SqlActiveDirectoryAdministrator(Construct Scope, string Id, SqlActiveDirectoryAdministratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig">SqlActiveDirectoryAdministratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts"></a>

```csharp
private void PutTimeouts(SqlActiveDirectoryAdministratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

---

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```csharp
private void ResetAzureadAuthenticationOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SqlActiveDirectoryAdministrator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SqlActiveDirectoryAdministrator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SqlActiveDirectoryAdministrator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SqlActiveDirectoryAdministrator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlActiveDirectoryAdministrator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts"></a>

```csharp
public SqlActiveDirectoryAdministratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```csharp
public object AzureadAuthenticationOnlyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```csharp
public object AzureadAuthenticationOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlActiveDirectoryAdministratorConfig <a name="SqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SqlActiveDirectoryAdministratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Login,
    string ObjectId,
    string ResourceGroupName,
    string ServerName,
    string TenantId,
    object AzureadAuthenticationOnly = null,
    string Id = null,
    SqlActiveDirectoryAdministratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login">Login</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```csharp
public object AzureadAuthenticationOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```csharp
public SqlActiveDirectoryAdministratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}

---

### SqlActiveDirectoryAdministratorTimeouts <a name="SqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SqlActiveDirectoryAdministratorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SqlActiveDirectoryAdministratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



