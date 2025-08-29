# `functionAppConnection` Submodule <a name="`functionAppConnection` Submodule" id="@cdktf/provider-azurerm.functionAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppConnection <a name="FunctionAppConnection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection azurerm_function_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnection(Construct Scope, string Id, FunctionAppConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig">FunctionAppConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig">FunctionAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore">PutSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetClientType">ResetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetSecretStore">ResetSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetVnetSolution">ResetVnetSolution</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication"></a>

```csharp
private void PutAuthentication(FunctionAppConnectionAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---

##### `PutSecretStore` <a name="PutSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore"></a>

```csharp
private void PutSecretStore(FunctionAppConnectionSecretStore Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putSecretStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(FunctionAppConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a>

---

##### `ResetClientType` <a name="ResetClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetClientType"></a>

```csharp
private void ResetClientType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecretStore` <a name="ResetSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetSecretStore"></a>

```csharp
private void ResetSecretStore()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVnetSolution` <a name="ResetVnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.resetVnetSolution"></a>

```csharp
private void ResetVnetSolution()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionAppConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FunctionAppConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionAppConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionAppConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference">FunctionAppConnectionAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStore">SecretStore</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference">FunctionAppConnectionSecretStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference">FunctionAppConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientTypeInput">ClientTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppIdInput">FunctionAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStoreInput">SecretStoreInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolutionInput">VnetSolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientType">ClientType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppId">FunctionAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolution">VnetSolution</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authentication"></a>

```csharp
public FunctionAppConnectionAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference">FunctionAppConnectionAuthenticationOutputReference</a>

---

##### `SecretStore`<sup>Required</sup> <a name="SecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStore"></a>

```csharp
public FunctionAppConnectionSecretStoreOutputReference SecretStore { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference">FunctionAppConnectionSecretStoreOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeouts"></a>

```csharp
public FunctionAppConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference">FunctionAppConnectionTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.authenticationInput"></a>

```csharp
public FunctionAppConnectionAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---

##### `ClientTypeInput`<sup>Optional</sup> <a name="ClientTypeInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientTypeInput"></a>

```csharp
public string ClientTypeInput { get; }
```

- *Type:* string

---

##### `FunctionAppIdInput`<sup>Optional</sup> <a name="FunctionAppIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppIdInput"></a>

```csharp
public string FunctionAppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretStoreInput`<sup>Optional</sup> <a name="SecretStoreInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.secretStoreInput"></a>

```csharp
public FunctionAppConnectionSecretStore SecretStoreInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VnetSolutionInput`<sup>Optional</sup> <a name="VnetSolutionInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolutionInput"></a>

```csharp
public string VnetSolutionInput { get; }
```

- *Type:* string

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.clientType"></a>

```csharp
public string ClientType { get; }
```

- *Type:* string

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.functionAppId"></a>

```csharp
public string FunctionAppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `VnetSolution`<sup>Required</sup> <a name="VnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.vnetSolution"></a>

```csharp
public string VnetSolution { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppConnectionAuthentication <a name="FunctionAppConnectionAuthentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionAuthentication {
    string Type,
    string Certificate = null,
    string ClientId = null,
    string Name = null,
    string PrincipalId = null,
    string Secret = null,
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#type FunctionAppConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#certificate FunctionAppConnection#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#client_id FunctionAppConnection#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#name FunctionAppConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.principalId">PrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#principal_id FunctionAppConnection#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#secret FunctionAppConnection#secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#subscription_id FunctionAppConnection#subscription_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#type FunctionAppConnection#type}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#certificate FunctionAppConnection#certificate}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#client_id FunctionAppConnection#client_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#name FunctionAppConnection#name}.

---

##### `PrincipalId`<sup>Optional</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.principalId"></a>

```csharp
public string PrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#principal_id FunctionAppConnection#principal_id}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#secret FunctionAppConnection#secret}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#subscription_id FunctionAppConnection#subscription_id}.

---

### FunctionAppConnectionConfig <a name="FunctionAppConnectionConfig" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    FunctionAppConnectionAuthentication Authentication,
    string FunctionAppId,
    string Name,
    string TargetResourceId,
    string ClientType = null,
    string Id = null,
    FunctionAppConnectionSecretStore SecretStore = null,
    FunctionAppConnectionTimeouts Timeouts = null,
    string VnetSolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.functionAppId">FunctionAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#function_app_id FunctionAppConnection#function_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#name FunctionAppConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#target_resource_id FunctionAppConnection#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.clientType">ClientType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#client_type FunctionAppConnection#client_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#id FunctionAppConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.secretStore">SecretStore</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | secret_store block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.vnetSolution">VnetSolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#vnet_solution FunctionAppConnection#vnet_solution}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.authentication"></a>

```csharp
public FunctionAppConnectionAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#authentication FunctionAppConnection#authentication}

---

##### `FunctionAppId`<sup>Required</sup> <a name="FunctionAppId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.functionAppId"></a>

```csharp
public string FunctionAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#function_app_id FunctionAppConnection#function_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#name FunctionAppConnection#name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#target_resource_id FunctionAppConnection#target_resource_id}.

---

##### `ClientType`<sup>Optional</sup> <a name="ClientType" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.clientType"></a>

```csharp
public string ClientType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#client_type FunctionAppConnection#client_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#id FunctionAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretStore`<sup>Optional</sup> <a name="SecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.secretStore"></a>

```csharp
public FunctionAppConnectionSecretStore SecretStore { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

secret_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#secret_store FunctionAppConnection#secret_store}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.timeouts"></a>

```csharp
public FunctionAppConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts">FunctionAppConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#timeouts FunctionAppConnection#timeouts}

---

##### `VnetSolution`<sup>Optional</sup> <a name="VnetSolution" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionConfig.property.vnetSolution"></a>

```csharp
public string VnetSolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#vnet_solution FunctionAppConnection#vnet_solution}.

---

### FunctionAppConnectionSecretStore <a name="FunctionAppConnectionSecretStore" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionSecretStore {
    string KeyVaultId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#key_vault_id FunctionAppConnection#key_vault_id}. |

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#key_vault_id FunctionAppConnection#key_vault_id}.

---

### FunctionAppConnectionTimeouts <a name="FunctionAppConnectionTimeouts" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#create FunctionAppConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#delete FunctionAppConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#read FunctionAppConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#update FunctionAppConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#create FunctionAppConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#delete FunctionAppConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#read FunctionAppConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/function_app_connection#update FunctionAppConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppConnectionAuthenticationOutputReference <a name="FunctionAppConnectionAuthenticationOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetPrincipalId">ResetPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrincipalId` <a name="ResetPrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetPrincipalId"></a>

```csharp
private void ResetPrincipalId()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalIdInput"></a>

```csharp
public string PrincipalIdInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthenticationOutputReference.property.internalValue"></a>

```csharp
public FunctionAppConnectionAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionAuthentication">FunctionAppConnectionAuthentication</a>

---


### FunctionAppConnectionSecretStoreOutputReference <a name="FunctionAppConnectionSecretStoreOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionSecretStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStoreOutputReference.property.internalValue"></a>

```csharp
public FunctionAppConnectionSecretStore InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionSecretStore">FunctionAppConnectionSecretStore</a>

---


### FunctionAppConnectionTimeoutsOutputReference <a name="FunctionAppConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppConnection.FunctionAppConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



