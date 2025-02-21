# `lbBackendAddressPoolAddress` Submodule <a name="`lbBackendAddressPoolAddress` Submodule" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbBackendAddressPoolAddress <a name="LbBackendAddressPoolAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address azurerm_lb_backend_address_pool_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddress(Construct Scope, string Id, LbBackendAddressPoolAddressConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig">LbBackendAddressPoolAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId">ResetBackendAddressIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts"></a>

```csharp
private void PutTimeouts(LbBackendAddressPoolAddressTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

---

##### `ResetBackendAddressIpConfigurationId` <a name="ResetBackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId"></a>

```csharp
private void ResetBackendAddressIpConfigurationId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LbBackendAddressPoolAddress.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LbBackendAddressPoolAddress.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LbBackendAddressPoolAddress.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LbBackendAddressPoolAddress.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbBackendAddressPoolAddress to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbBackendAddressPoolAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbBackendAddressPoolAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping">InboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput">BackendAddressIpConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput">BackendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId">BackendAddressIpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InboundNatRulePortMapping`<sup>Required</sup> <a name="InboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping"></a>

```csharp
public LbBackendAddressPoolAddressInboundNatRulePortMappingList InboundNatRulePortMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts"></a>

```csharp
public LbBackendAddressPoolAddressTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a>

---

##### `BackendAddressIpConfigurationIdInput`<sup>Optional</sup> <a name="BackendAddressIpConfigurationIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput"></a>

```csharp
public string BackendAddressIpConfigurationIdInput { get; }
```

- *Type:* string

---

##### `BackendAddressPoolIdInput`<sup>Optional</sup> <a name="BackendAddressPoolIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput"></a>

```csharp
public string BackendAddressPoolIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `BackendAddressIpConfigurationId`<sup>Required</sup> <a name="BackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId"></a>

```csharp
public string BackendAddressIpConfigurationId { get; }
```

- *Type:* string

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId"></a>

```csharp
public string BackendAddressPoolId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbBackendAddressPoolAddressConfig <a name="LbBackendAddressPoolAddressConfig" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackendAddressPoolId,
    string Name,
    string BackendAddressIpConfigurationId = null,
    string Id = null,
    string IpAddress = null,
    LbBackendAddressPoolAddressTimeouts Timeouts = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId">BackendAddressIpConfigurationId</a></code> | <code>string</code> | For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId"></a>

```csharp
public string BackendAddressPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}.

---

##### `BackendAddressIpConfigurationId`<sup>Optional</sup> <a name="BackendAddressIpConfigurationId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId"></a>

```csharp
public string BackendAddressIpConfigurationId { get; set; }
```

- *Type:* string

For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#backend_address_ip_configuration_id LbBackendAddressPoolAddress#backend_address_ip_configuration_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts"></a>

```csharp
public LbBackendAddressPoolAddressTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#timeouts LbBackendAddressPoolAddress#timeouts}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}.

---

### LbBackendAddressPoolAddressInboundNatRulePortMapping <a name="LbBackendAddressPoolAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressInboundNatRulePortMapping {

};
```


### LbBackendAddressPoolAddressTimeouts <a name="LbBackendAddressPoolAddressTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbBackendAddressPoolAddressInboundNatRulePortMappingList <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressInboundNatRulePortMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get"></a>

```csharp
private LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort">FrontendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">InboundNatRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `FrontendPort`<sup>Required</sup> <a name="FrontendPort" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```csharp
public double FrontendPort { get; }
```

- *Type:* double

---

##### `InboundNatRuleName`<sup>Required</sup> <a name="InboundNatRuleName" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```csharp
public string InboundNatRuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```csharp
public LbBackendAddressPoolAddressInboundNatRulePortMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a>

---


### LbBackendAddressPoolAddressTimeoutsOutputReference <a name="LbBackendAddressPoolAddressTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LbBackendAddressPoolAddressTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



