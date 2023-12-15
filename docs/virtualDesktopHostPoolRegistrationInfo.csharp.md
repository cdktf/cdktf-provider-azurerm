# `virtualDesktopHostPoolRegistrationInfo` Submodule <a name="`virtualDesktopHostPoolRegistrationInfo` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPoolRegistrationInfo <a name="VirtualDesktopHostPoolRegistrationInfo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info azurerm_virtual_desktop_host_pool_registration_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopHostPoolRegistrationInfo(Construct Scope, string Id, VirtualDesktopHostPoolRegistrationInfoConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualDesktopHostPoolRegistrationInfoTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopHostPoolRegistrationInfo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopHostPoolRegistrationInfo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopHostPoolRegistrationInfo.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualDesktopHostPoolRegistrationInfo.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopHostPoolRegistrationInfo to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopHostPoolRegistrationInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopHostPoolRegistrationInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput">ExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput">HostpoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId">HostpoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts"></a>

```csharp
public VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput"></a>

```csharp
public string ExpirationDateInput { get; }
```

- *Type:* string

---

##### `HostpoolIdInput`<sup>Optional</sup> <a name="HostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput"></a>

```csharp
public string HostpoolIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId"></a>

```csharp
public string HostpoolId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolRegistrationInfoConfig <a name="VirtualDesktopHostPoolRegistrationInfoConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopHostPoolRegistrationInfoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExpirationDate,
    string HostpoolId,
    string Id = null,
    VirtualDesktopHostPoolRegistrationInfoTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId">HostpoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}.

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId"></a>

```csharp
public string HostpoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts"></a>

```csharp
public VirtualDesktopHostPoolRegistrationInfoTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#timeouts VirtualDesktopHostPoolRegistrationInfo#timeouts}

---

### VirtualDesktopHostPoolRegistrationInfoTimeouts <a name="VirtualDesktopHostPoolRegistrationInfoTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopHostPoolRegistrationInfoTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference <a name="VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



