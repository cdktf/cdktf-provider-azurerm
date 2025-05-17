# `appServiceVirtualNetworkSwiftConnection` Submodule <a name="`appServiceVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceVirtualNetworkSwiftConnection <a name="AppServiceVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection azurerm_app_service_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceVirtualNetworkSwiftConnection(Construct Scope, string Id, AppServiceVirtualNetworkSwiftConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig">AppServiceVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceVirtualNetworkSwiftConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceVirtualNetworkSwiftConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceVirtualNetworkSwiftConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceVirtualNetworkSwiftConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceVirtualNetworkSwiftConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppServiceVirtualNetworkSwiftConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceVirtualNetworkSwiftConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceVirtualNetworkSwiftConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceVirtualNetworkSwiftConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput">AppServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId">AppServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeouts"></a>

```csharp
public AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `AppServiceIdInput`<sup>Optional</sup> <a name="AppServiceIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```csharp
public string AppServiceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.appServiceId"></a>

```csharp
public string AppServiceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceVirtualNetworkSwiftConnectionConfig <a name="AppServiceVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceVirtualNetworkSwiftConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServiceId,
    string SubnetId,
    string Id = null,
    AppServiceVirtualNetworkSwiftConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId">AppServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```csharp
public string AppServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#id AppServiceVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```csharp
public AppServiceVirtualNetworkSwiftConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts">AppServiceVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#timeouts AppServiceVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceVirtualNetworkSwiftConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#create AppServiceVirtualNetworkSwiftConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#delete AppServiceVirtualNetworkSwiftConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#read AppServiceVirtualNetworkSwiftConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/app_service_virtual_network_swift_connection#update AppServiceVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceVirtualNetworkSwiftConnection.AppServiceVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



