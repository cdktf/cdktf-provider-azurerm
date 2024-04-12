# `mobileNetworkDataNetwork` Submodule <a name="`mobileNetworkDataNetwork` Submodule" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkDataNetwork <a name="MobileNetworkDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network azurerm_mobile_network_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkDataNetwork(Construct Scope, string Id, MobileNetworkDataNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig">MobileNetworkDataNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig">MobileNetworkDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(MobileNetworkDataNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts">MobileNetworkDataNetworkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkDataNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkDataNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkDataNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkDataNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkDataNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MobileNetworkDataNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkDataNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkDataNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkDataNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference">MobileNetworkDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.timeouts"></a>

```csharp
public MobileNetworkDataNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference">MobileNetworkDataNetworkTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.mobileNetworkIdInput"></a>

```csharp
public string MobileNetworkIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkDataNetworkConfig <a name="MobileNetworkDataNetworkConfig" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkDataNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MobileNetworkId,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MobileNetworkDataNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#location MobileNetworkDataNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#mobile_network_id MobileNetworkDataNetwork#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#name MobileNetworkDataNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#description MobileNetworkDataNetwork#description}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#id MobileNetworkDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#tags MobileNetworkDataNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts">MobileNetworkDataNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#location MobileNetworkDataNetwork#location}.

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#mobile_network_id MobileNetworkDataNetwork#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#name MobileNetworkDataNetwork#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#description MobileNetworkDataNetwork#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#id MobileNetworkDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#tags MobileNetworkDataNetwork#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkConfig.property.timeouts"></a>

```csharp
public MobileNetworkDataNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts">MobileNetworkDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#timeouts MobileNetworkDataNetwork#timeouts}

---

### MobileNetworkDataNetworkTimeouts <a name="MobileNetworkDataNetworkTimeouts" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkDataNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#create MobileNetworkDataNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#delete MobileNetworkDataNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#read MobileNetworkDataNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#update MobileNetworkDataNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#create MobileNetworkDataNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#delete MobileNetworkDataNetwork#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#read MobileNetworkDataNetwork#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/mobile_network_data_network#update MobileNetworkDataNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkDataNetworkTimeoutsOutputReference <a name="MobileNetworkDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkDataNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkDataNetwork.MobileNetworkDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



