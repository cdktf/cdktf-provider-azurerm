# `containerRegistryTokenPassword` Submodule <a name="`containerRegistryTokenPassword` Submodule" id="@cdktf/provider-azurerm.containerRegistryTokenPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTokenPassword <a name="ContainerRegistryTokenPassword" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password azurerm_container_registry_token_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPassword(Construct Scope, string Id, ContainerRegistryTokenPasswordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig">ContainerRegistryTokenPasswordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig">ContainerRegistryTokenPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1">PutPassword1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2">PutPassword2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2">ResetPassword2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPassword1` <a name="PutPassword1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1"></a>

```csharp
private void PutPassword1(ContainerRegistryTokenPasswordPassword1 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---

##### `PutPassword2` <a name="PutPassword2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2"></a>

```csharp
private void PutPassword2(ContainerRegistryTokenPasswordPassword2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerRegistryTokenPasswordTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword2` <a name="ResetPassword2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2"></a>

```csharp
private void ResetPassword2()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryTokenPassword resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryTokenPassword.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryTokenPassword.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryTokenPassword.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryTokenPassword.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerRegistryTokenPassword resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryTokenPassword to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryTokenPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryTokenPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1">Password1</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2">Password2</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput">ContainerRegistryTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input">Password1Input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input">Password2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId">ContainerRegistryTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Password1`<sup>Required</sup> <a name="Password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1"></a>

```csharp
public ContainerRegistryTokenPasswordPassword1OutputReference Password1 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a>

---

##### `Password2`<sup>Required</sup> <a name="Password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2"></a>

```csharp
public ContainerRegistryTokenPasswordPassword2OutputReference Password2 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts"></a>

```csharp
public ContainerRegistryTokenPasswordTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a>

---

##### `ContainerRegistryTokenIdInput`<sup>Optional</sup> <a name="ContainerRegistryTokenIdInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput"></a>

```csharp
public string ContainerRegistryTokenIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Password1Input`<sup>Optional</sup> <a name="Password1Input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input"></a>

```csharp
public ContainerRegistryTokenPasswordPassword1 Password1Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---

##### `Password2Input`<sup>Optional</sup> <a name="Password2Input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input"></a>

```csharp
public ContainerRegistryTokenPasswordPassword2 Password2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerRegistryTokenId`<sup>Required</sup> <a name="ContainerRegistryTokenId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId"></a>

```csharp
public string ContainerRegistryTokenId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenPasswordConfig <a name="ContainerRegistryTokenPasswordConfig" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerRegistryTokenId,
    ContainerRegistryTokenPasswordPassword1 Password1,
    string Id = null,
    ContainerRegistryTokenPasswordPassword2 Password2 = null,
    ContainerRegistryTokenPasswordTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId">ContainerRegistryTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1">Password1</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | password1 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2">Password2</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | password2 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerRegistryTokenId`<sup>Required</sup> <a name="ContainerRegistryTokenId" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId"></a>

```csharp
public string ContainerRegistryTokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}.

---

##### `Password1`<sup>Required</sup> <a name="Password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1"></a>

```csharp
public ContainerRegistryTokenPasswordPassword1 Password1 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

password1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#password1 ContainerRegistryTokenPassword#password1}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password2`<sup>Optional</sup> <a name="Password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2"></a>

```csharp
public ContainerRegistryTokenPasswordPassword2 Password2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

password2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#password2 ContainerRegistryTokenPassword#password2}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts"></a>

```csharp
public ContainerRegistryTokenPasswordTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#timeouts ContainerRegistryTokenPassword#timeouts}

---

### ContainerRegistryTokenPasswordPassword1 <a name="ContainerRegistryTokenPasswordPassword1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordPassword1 {
    string Expiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry">Expiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `Expiry`<sup>Optional</sup> <a name="Expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry"></a>

```csharp
public string Expiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordPassword2 <a name="ContainerRegistryTokenPasswordPassword2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordPassword2 {
    string Expiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry">Expiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `Expiry`<sup>Optional</sup> <a name="Expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry"></a>

```csharp
public string Expiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordTimeouts <a name="ContainerRegistryTokenPasswordTimeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenPasswordPassword1OutputReference <a name="ContainerRegistryTokenPasswordPassword1OutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordPassword1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry">ResetExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiry` <a name="ResetExpiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry"></a>

```csharp
private void ResetExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput">ExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput"></a>

```csharp
public string ExpiryInput { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue"></a>

```csharp
public ContainerRegistryTokenPasswordPassword1 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---


### ContainerRegistryTokenPasswordPassword2OutputReference <a name="ContainerRegistryTokenPasswordPassword2OutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordPassword2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry">ResetExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiry` <a name="ResetExpiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry"></a>

```csharp
private void ResetExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput">ExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput"></a>

```csharp
public string ExpiryInput { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue"></a>

```csharp
public ContainerRegistryTokenPasswordPassword2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---


### ContainerRegistryTokenPasswordTimeoutsOutputReference <a name="ContainerRegistryTokenPasswordTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryTokenPasswordTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



