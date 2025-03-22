# `appServiceSlotVirtualNetworkSwiftConnection` Submodule <a name="`appServiceSlotVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlotVirtualNetworkSwiftConnection <a name="AppServiceSlotVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection azurerm_app_service_slot_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSlotVirtualNetworkSwiftConnection(Construct Scope, string Id, AppServiceSlotVirtualNetworkSwiftConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceSlotVirtualNetworkSwiftConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSlotVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSlotVirtualNetworkSwiftConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSlotVirtualNetworkSwiftConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSlotVirtualNetworkSwiftConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSlotVirtualNetworkSwiftConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppServiceSlotVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceSlotVirtualNetworkSwiftConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceSlotVirtualNetworkSwiftConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSlotVirtualNetworkSwiftConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput">AppServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput">SlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId">AppServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts"></a>

```csharp
public AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `AppServiceIdInput`<sup>Optional</sup> <a name="AppServiceIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```csharp
public string AppServiceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput"></a>

```csharp
public string SlotNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId"></a>

```csharp
public string AppServiceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionConfig <a name="AppServiceSlotVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSlotVirtualNetworkSwiftConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServiceId,
    string SlotName,
    string SubnetId,
    string Id = null,
    AppServiceSlotVirtualNetworkSwiftConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId">AppServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName">SlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```csharp
public string AppServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}.

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName"></a>

```csharp
public string SlotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```csharp
public AppServiceSlotVirtualNetworkSwiftConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#timeouts AppServiceSlotVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceSlotVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSlotVirtualNetworkSwiftConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



