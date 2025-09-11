# `virtualHubConnection` Submodule <a name="`virtualHubConnection` Submodule" id="@cdktf/provider-azurerm.virtualHubConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubConnection <a name="VirtualHubConnection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection azurerm_virtual_hub_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnection(Construct Scope, string Id, VirtualHubConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig">VirtualHubConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig">VirtualHubConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetInternetSecurityEnabled">ResetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetRouting">ResetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouting` <a name="PutRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting"></a>

```csharp
private void PutRouting(VirtualHubConnectionRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualHubConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetSecurityEnabled` <a name="ResetInternetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetInternetSecurityEnabled"></a>

```csharp
private void ResetInternetSecurityEnabled()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetRouting"></a>

```csharp
private void ResetRouting()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualHubConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualHubConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualHubConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference">VirtualHubConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference">VirtualHubConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabledInput">InternetSecurityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkIdInput">RemoteVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routingInput">RoutingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routing"></a>

```csharp
public VirtualHubConnectionRoutingOutputReference Routing { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference">VirtualHubConnectionRoutingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeouts"></a>

```csharp
public VirtualHubConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference">VirtualHubConnectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetSecurityEnabledInput`<sup>Optional</sup> <a name="InternetSecurityEnabledInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabledInput"></a>

```csharp
public object InternetSecurityEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="RemoteVirtualNetworkIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkIdInput"></a>

```csharp
public string RemoteVirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.routingInput"></a>

```csharp
public VirtualHubConnectionRouting RoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubIdInput"></a>

```csharp
public string VirtualHubIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternetSecurityEnabled`<sup>Required</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.internetSecurityEnabled"></a>

```csharp
public object InternetSecurityEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; }
```

- *Type:* string

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubConnectionConfig <a name="VirtualHubConnectionConfig" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RemoteVirtualNetworkId,
    string VirtualHubId,
    string Id = null,
    object InternetSecurityEnabled = null,
    VirtualHubConnectionRouting Routing = null,
    VirtualHubConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#virtual_hub_id VirtualHubConnection#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#id VirtualHubConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.internetSecurityEnabled">InternetSecurityEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#internet_security_enabled VirtualHubConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.routing">Routing</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}.

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#virtual_hub_id VirtualHubConnection#virtual_hub_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#id VirtualHubConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetSecurityEnabled`<sup>Optional</sup> <a name="InternetSecurityEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.internetSecurityEnabled"></a>

```csharp
public object InternetSecurityEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#internet_security_enabled VirtualHubConnection#internet_security_enabled}.

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.routing"></a>

```csharp
public VirtualHubConnectionRouting Routing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#routing VirtualHubConnection#routing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionConfig.property.timeouts"></a>

```csharp
public VirtualHubConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts">VirtualHubConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#timeouts VirtualHubConnection#timeouts}

---

### VirtualHubConnectionRouting <a name="VirtualHubConnectionRouting" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRouting {
    string AssociatedRouteTableId = null,
    string InboundRouteMapId = null,
    string OutboundRouteMapId = null,
    VirtualHubConnectionRoutingPropagatedRouteTable PropagatedRouteTable = null,
    string StaticVnetLocalRouteOverrideCriteria = null,
    object StaticVnetPropagateStaticRoutesEnabled = null,
    object StaticVnetRoute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#associated_route_table_id VirtualHubConnection#associated_route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#inbound_route_map_id VirtualHubConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#outbound_route_map_id VirtualHubConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetLocalRouteOverrideCriteria">StaticVnetLocalRouteOverrideCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#static_vnet_local_route_override_criteria VirtualHubConnection#static_vnet_local_route_override_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetPropagateStaticRoutesEnabled">StaticVnetPropagateStaticRoutesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#static_vnet_propagate_static_routes_enabled VirtualHubConnection#static_vnet_propagate_static_routes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetRoute">StaticVnetRoute</a></code> | <code>object</code> | static_vnet_route block. |

---

##### `AssociatedRouteTableId`<sup>Optional</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.associatedRouteTableId"></a>

```csharp
public string AssociatedRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#associated_route_table_id VirtualHubConnection#associated_route_table_id}.

---

##### `InboundRouteMapId`<sup>Optional</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.inboundRouteMapId"></a>

```csharp
public string InboundRouteMapId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#inbound_route_map_id VirtualHubConnection#inbound_route_map_id}.

---

##### `OutboundRouteMapId`<sup>Optional</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.outboundRouteMapId"></a>

```csharp
public string OutboundRouteMapId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#outbound_route_map_id VirtualHubConnection#outbound_route_map_id}.

---

##### `PropagatedRouteTable`<sup>Optional</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.propagatedRouteTable"></a>

```csharp
public VirtualHubConnectionRoutingPropagatedRouteTable PropagatedRouteTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#propagated_route_table VirtualHubConnection#propagated_route_table}

---

##### `StaticVnetLocalRouteOverrideCriteria`<sup>Optional</sup> <a name="StaticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetLocalRouteOverrideCriteria"></a>

```csharp
public string StaticVnetLocalRouteOverrideCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#static_vnet_local_route_override_criteria VirtualHubConnection#static_vnet_local_route_override_criteria}.

---

##### `StaticVnetPropagateStaticRoutesEnabled`<sup>Optional</sup> <a name="StaticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetPropagateStaticRoutesEnabled"></a>

```csharp
public object StaticVnetPropagateStaticRoutesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#static_vnet_propagate_static_routes_enabled VirtualHubConnection#static_vnet_propagate_static_routes_enabled}.

---

##### `StaticVnetRoute`<sup>Optional</sup> <a name="StaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting.property.staticVnetRoute"></a>

```csharp
public object StaticVnetRoute { get; set; }
```

- *Type:* object

static_vnet_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#static_vnet_route VirtualHubConnection#static_vnet_route}

---

### VirtualHubConnectionRoutingPropagatedRouteTable <a name="VirtualHubConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingPropagatedRouteTable {
    string[] Labels = null,
    string[] RouteTableIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#labels VirtualHubConnection#labels}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#route_table_ids VirtualHubConnection#route_table_ids}. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#labels VirtualHubConnection#labels}.

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#route_table_ids VirtualHubConnection#route_table_ids}.

---

### VirtualHubConnectionRoutingStaticVnetRoute <a name="VirtualHubConnectionRoutingStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingStaticVnetRoute {
    string[] AddressPrefixes = null,
    string Name = null,
    string NextHopIpAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#address_prefixes VirtualHubConnection#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.nextHopIpAddress">NextHopIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}. |

---

##### `AddressPrefixes`<sup>Optional</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#address_prefixes VirtualHubConnection#address_prefixes}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#name VirtualHubConnection#name}.

---

##### `NextHopIpAddress`<sup>Optional</sup> <a name="NextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRoute.property.nextHopIpAddress"></a>

```csharp
public string NextHopIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}.

---

### VirtualHubConnectionTimeouts <a name="VirtualHubConnectionTimeouts" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#create VirtualHubConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#delete VirtualHubConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#read VirtualHubConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#update VirtualHubConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#create VirtualHubConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#delete VirtualHubConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#read VirtualHubConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_hub_connection#update VirtualHubConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubConnectionRoutingOutputReference <a name="VirtualHubConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable">PutPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute">PutStaticVnetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetAssociatedRouteTableId">ResetAssociatedRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetInboundRouteMapId">ResetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetOutboundRouteMapId">ResetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetPropagatedRouteTable">ResetPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetLocalRouteOverrideCriteria">ResetStaticVnetLocalRouteOverrideCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetPropagateStaticRoutesEnabled">ResetStaticVnetPropagateStaticRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetRoute">ResetStaticVnetRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropagatedRouteTable` <a name="PutPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```csharp
private void PutPropagatedRouteTable(VirtualHubConnectionRoutingPropagatedRouteTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---

##### `PutStaticVnetRoute` <a name="PutStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute"></a>

```csharp
private void PutStaticVnetRoute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.putStaticVnetRoute.parameter.value"></a>

- *Type:* object

---

##### `ResetAssociatedRouteTableId` <a name="ResetAssociatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetAssociatedRouteTableId"></a>

```csharp
private void ResetAssociatedRouteTableId()
```

##### `ResetInboundRouteMapId` <a name="ResetInboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```csharp
private void ResetInboundRouteMapId()
```

##### `ResetOutboundRouteMapId` <a name="ResetOutboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```csharp
private void ResetOutboundRouteMapId()
```

##### `ResetPropagatedRouteTable` <a name="ResetPropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```csharp
private void ResetPropagatedRouteTable()
```

##### `ResetStaticVnetLocalRouteOverrideCriteria` <a name="ResetStaticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetLocalRouteOverrideCriteria"></a>

```csharp
private void ResetStaticVnetLocalRouteOverrideCriteria()
```

##### `ResetStaticVnetPropagateStaticRoutesEnabled` <a name="ResetStaticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetPropagateStaticRoutesEnabled"></a>

```csharp
private void ResetStaticVnetPropagateStaticRoutesEnabled()
```

##### `ResetStaticVnetRoute` <a name="ResetStaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.resetStaticVnetRoute"></a>

```csharp
private void ResetStaticVnetRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable">PropagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference">VirtualHubConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRoute">StaticVnetRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList">VirtualHubConnectionRoutingStaticVnetRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableIdInput">AssociatedRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapIdInput">InboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapIdInput">OutboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTableInput">PropagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteriaInput">StaticVnetLocalRouteOverrideCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabledInput">StaticVnetPropagateStaticRoutesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRouteInput">StaticVnetRouteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId">AssociatedRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId">InboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId">OutboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria">StaticVnetLocalRouteOverrideCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabled">StaticVnetPropagateStaticRoutesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropagatedRouteTable`<sup>Required</sup> <a name="PropagatedRouteTable" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```csharp
public VirtualHubConnectionRoutingPropagatedRouteTableOutputReference PropagatedRouteTable { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference">VirtualHubConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `StaticVnetRoute`<sup>Required</sup> <a name="StaticVnetRoute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRoute"></a>

```csharp
public VirtualHubConnectionRoutingStaticVnetRouteList StaticVnetRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList">VirtualHubConnectionRoutingStaticVnetRouteList</a>

---

##### `AssociatedRouteTableIdInput`<sup>Optional</sup> <a name="AssociatedRouteTableIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableIdInput"></a>

```csharp
public string AssociatedRouteTableIdInput { get; }
```

- *Type:* string

---

##### `InboundRouteMapIdInput`<sup>Optional</sup> <a name="InboundRouteMapIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```csharp
public string InboundRouteMapIdInput { get; }
```

- *Type:* string

---

##### `OutboundRouteMapIdInput`<sup>Optional</sup> <a name="OutboundRouteMapIdInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```csharp
public string OutboundRouteMapIdInput { get; }
```

- *Type:* string

---

##### `PropagatedRouteTableInput`<sup>Optional</sup> <a name="PropagatedRouteTableInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```csharp
public VirtualHubConnectionRoutingPropagatedRouteTable PropagatedRouteTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---

##### `StaticVnetLocalRouteOverrideCriteriaInput`<sup>Optional</sup> <a name="StaticVnetLocalRouteOverrideCriteriaInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteriaInput"></a>

```csharp
public string StaticVnetLocalRouteOverrideCriteriaInput { get; }
```

- *Type:* string

---

##### `StaticVnetPropagateStaticRoutesEnabledInput`<sup>Optional</sup> <a name="StaticVnetPropagateStaticRoutesEnabledInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabledInput"></a>

```csharp
public object StaticVnetPropagateStaticRoutesEnabledInput { get; }
```

- *Type:* object

---

##### `StaticVnetRouteInput`<sup>Optional</sup> <a name="StaticVnetRouteInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetRouteInput"></a>

```csharp
public object StaticVnetRouteInput { get; }
```

- *Type:* object

---

##### `AssociatedRouteTableId`<sup>Required</sup> <a name="AssociatedRouteTableId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId"></a>

```csharp
public string AssociatedRouteTableId { get; }
```

- *Type:* string

---

##### `InboundRouteMapId`<sup>Required</sup> <a name="InboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```csharp
public string InboundRouteMapId { get; }
```

- *Type:* string

---

##### `OutboundRouteMapId`<sup>Required</sup> <a name="OutboundRouteMapId" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```csharp
public string OutboundRouteMapId { get; }
```

- *Type:* string

---

##### `StaticVnetLocalRouteOverrideCriteria`<sup>Required</sup> <a name="StaticVnetLocalRouteOverrideCriteria" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria"></a>

```csharp
public string StaticVnetLocalRouteOverrideCriteria { get; }
```

- *Type:* string

---

##### `StaticVnetPropagateStaticRoutesEnabled`<sup>Required</sup> <a name="StaticVnetPropagateStaticRoutesEnabled" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.staticVnetPropagateStaticRoutesEnabled"></a>

```csharp
public object StaticVnetPropagateStaticRoutesEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingOutputReference.property.internalValue"></a>

```csharp
public VirtualHubConnectionRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRouting">VirtualHubConnectionRouting</a>

---


### VirtualHubConnectionRoutingPropagatedRouteTableOutputReference <a name="VirtualHubConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingPropagatedRouteTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resetRouteTableIds"></a>

```csharp
private void ResetRouteTableIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```csharp
public string[] RouteTableIdsInput { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```csharp
public VirtualHubConnectionRoutingPropagatedRouteTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingPropagatedRouteTable">VirtualHubConnectionRoutingPropagatedRouteTable</a>

---


### VirtualHubConnectionRoutingStaticVnetRouteList <a name="VirtualHubConnectionRoutingStaticVnetRouteList" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingStaticVnetRouteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get"></a>

```csharp
private VirtualHubConnectionRoutingStaticVnetRouteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualHubConnectionRoutingStaticVnetRouteOutputReference <a name="VirtualHubConnectionRoutingStaticVnetRouteOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionRoutingStaticVnetRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetAddressPrefixes">ResetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetNextHopIpAddress">ResetNextHopIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressPrefixes` <a name="ResetAddressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetAddressPrefixes"></a>

```csharp
private void ResetAddressPrefixes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNextHopIpAddress` <a name="ResetNextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.resetNextHopIpAddress"></a>

```csharp
private void ResetNextHopIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddressInput">NextHopIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress">NextHopIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixesInput"></a>

```csharp
public string[] AddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NextHopIpAddressInput`<sup>Optional</sup> <a name="NextHopIpAddressInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddressInput"></a>

```csharp
public string NextHopIpAddressInput { get; }
```

- *Type:* string

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NextHopIpAddress`<sup>Required</sup> <a name="NextHopIpAddress" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress"></a>

```csharp
public string NextHopIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualHubConnectionTimeoutsOutputReference <a name="VirtualHubConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubConnection.VirtualHubConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



