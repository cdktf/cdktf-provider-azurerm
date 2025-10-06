# `netappVolumeGroupOracle` Submodule <a name="`netappVolumeGroupOracle` Submodule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeGroupOracle <a name="NetappVolumeGroupOracle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracle(Construct Scope, string Id, NetappVolumeGroupOracleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig">NetappVolumeGroupOracleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig">NetappVolumeGroupOracleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappVolumeGroupOracleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume"></a>

```csharp
private void PutVolume(IResolvable|NetappVolumeGroupOracleVolume[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeGroupOracle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeGroupOracle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeGroupOracle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeGroupOracle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeGroupOracle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeGroupOracle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeGroupOracle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput">GroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput">VolumeInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription">GroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts"></a>

```csharp
public NetappVolumeGroupOracleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume"></a>

```csharp
public NetappVolumeGroupOracleVolumeList Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput"></a>

```csharp
public string ApplicationIdentifierInput { get; }
```

- *Type:* string

---

##### `GroupDescriptionInput`<sup>Optional</sup> <a name="GroupDescriptionInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput"></a>

```csharp
public string GroupDescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolume[] VolumeInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription"></a>

```csharp
public string GroupDescription { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeGroupOracleConfig <a name="NetappVolumeGroupOracleConfig" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountName,
    string ApplicationIdentifier,
    string GroupDescription,
    string Location,
    string Name,
    string ResourceGroupName,
    IResolvable|NetappVolumeGroupOracleVolume[] Volume,
    string Id = null,
    NetappVolumeGroupOracleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription">GroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume">Volume</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}.

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}.

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription"></a>

```csharp
public string GroupDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolume[] Volume { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#volume NetappVolumeGroupOracle#volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts"></a>

```csharp
public NetappVolumeGroupOracleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#timeouts NetappVolumeGroupOracle#timeouts}

---

### NetappVolumeGroupOracleTimeouts <a name="NetappVolumeGroupOracleTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}.

---

### NetappVolumeGroupOracleVolume <a name="NetappVolumeGroupOracleVolume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolume {
    string CapacityPoolId,
    IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule[] ExportPolicyRule,
    string Name,
    string[] Protocols,
    string SecurityStyle,
    string ServiceLevel,
    bool|IResolvable SnapshotDirectoryVisible,
    double StorageQuotaInGb,
    string SubnetId,
    double ThroughputInMibps,
    string VolumePath,
    string VolumeSpecName,
    NetappVolumeGroupOracleVolumeDataProtectionReplication DataProtectionReplication = null,
    NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicy = null,
    string EncryptionKeySource = null,
    string KeyVaultPrivateEndpointId = null,
    string NetworkFeatures = null,
    string ProximityPlacementGroupId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId">CapacityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule">ExportPolicyRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]</code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps">ThroughputInMibps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath">VolumePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName">VolumeSpecName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures">NetworkFeatures</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}. |

---

##### `CapacityPoolId`<sup>Required</sup> <a name="CapacityPoolId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId"></a>

```csharp
public string CapacityPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}.

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule[] ExportPolicyRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#export_policy_rule NetappVolumeGroupOracle#export_policy_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}.

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}.

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}.

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisible { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}.

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb"></a>

```csharp
public double StorageQuotaInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}.

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps"></a>

```csharp
public double ThroughputInMibps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}.

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath"></a>

```csharp
public string VolumePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}.

---

##### `VolumeSpecName`<sup>Required</sup> <a name="VolumeSpecName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName"></a>

```csharp
public string VolumeSpecName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}.

---

##### `DataProtectionReplication`<sup>Optional</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionReplication DataProtectionReplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#data_protection_replication NetappVolumeGroupOracle#data_protection_replication}

---

##### `DataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#data_protection_snapshot_policy NetappVolumeGroupOracle#data_protection_snapshot_policy}

---

##### `EncryptionKeySource`<sup>Optional</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource"></a>

```csharp
public string EncryptionKeySource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}.

---

##### `KeyVaultPrivateEndpointId`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId"></a>

```csharp
public string KeyVaultPrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}.

---

##### `NetworkFeatures`<sup>Optional</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures"></a>

```csharp
public string NetworkFeatures { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}.

---

### NetappVolumeGroupOracleVolumeDataProtectionReplication <a name="NetappVolumeGroupOracleVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeDataProtectionReplication {
    string RemoteVolumeLocation,
    string RemoteVolumeResourceId,
    string ReplicationFrequency,
    string EndpointType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency">ReplicationFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}. |

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```csharp
public string RemoteVolumeLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}.

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```csharp
public string RemoteVolumeResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}.

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency"></a>

```csharp
public string ReplicationFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}.

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}.

---

### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy {
    string SnapshotPolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}. |

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```csharp
public string SnapshotPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}.

---

### NetappVolumeGroupOracleVolumeExportPolicyRule <a name="NetappVolumeGroupOracleVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeExportPolicyRule {
    string AllowedClients,
    bool|IResolvable Nfsv3Enabled,
    bool|IResolvable Nfsv41Enabled,
    double RuleIndex,
    bool|IResolvable RootAccessEnabled = null,
    bool|IResolvable UnixReadOnly = null,
    bool|IResolvable UnixReadWrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients">AllowedClients</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled">Nfsv41Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex">RuleIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly">UnixReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite">UnixReadWrite</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}. |

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients"></a>

```csharp
public string AllowedClients { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}.

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled"></a>

```csharp
public bool|IResolvable Nfsv3Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}.

---

##### `Nfsv41Enabled`<sup>Required</sup> <a name="Nfsv41Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled"></a>

```csharp
public bool|IResolvable Nfsv41Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}.

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex"></a>

```csharp
public double RuleIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}.

---

##### `RootAccessEnabled`<sup>Optional</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```csharp
public bool|IResolvable RootAccessEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}.

---

##### `UnixReadOnly`<sup>Optional</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly"></a>

```csharp
public bool|IResolvable UnixReadOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}.

---

##### `UnixReadWrite`<sup>Optional</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite"></a>

```csharp
public bool|IResolvable UnixReadWrite { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeGroupOracleTimeoutsOutputReference <a name="NetappVolumeGroupOracleTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

---


### NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">RemoteVolumeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">RemoteVolumeResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">ReplicationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `RemoteVolumeLocationInput`<sup>Optional</sup> <a name="RemoteVolumeLocationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```csharp
public string RemoteVolumeLocationInput { get; }
```

- *Type:* string

---

##### `RemoteVolumeResourceIdInput`<sup>Optional</sup> <a name="RemoteVolumeResourceIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```csharp
public string RemoteVolumeResourceIdInput { get; }
```

- *Type:* string

---

##### `ReplicationFrequencyInput`<sup>Optional</sup> <a name="ReplicationFrequencyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```csharp
public string ReplicationFrequencyInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```csharp
public string RemoteVolumeLocation { get; }
```

- *Type:* string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```csharp
public string RemoteVolumeResourceId { get; }
```

- *Type:* string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```csharp
public string ReplicationFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---


### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">SnapshotPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnapshotPolicyIdInput`<sup>Optional</sup> <a name="SnapshotPolicyIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```csharp
public string SnapshotPolicyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```csharp
public string SnapshotPolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleList <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeExportPolicyRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get"></a>

```csharp
private NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">ResetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">ResetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">ResetUnixReadWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootAccessEnabled` <a name="ResetRootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```csharp
private void ResetRootAccessEnabled()
```

##### `ResetUnixReadOnly` <a name="ResetUnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```csharp
private void ResetUnixReadOnly()
```

##### `ResetUnixReadWrite` <a name="ResetUnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```csharp
private void ResetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput">Nfsv3EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput">Nfsv41EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">RootAccessEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">RuleIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">UnixReadOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">UnixReadWriteInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">Nfsv41Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex">RuleIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly">UnixReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite">UnixReadWrite</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```csharp
public string AllowedClientsInput { get; }
```

- *Type:* string

---

##### `Nfsv3EnabledInput`<sup>Optional</sup> <a name="Nfsv3EnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput"></a>

```csharp
public bool|IResolvable Nfsv3EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Nfsv41EnabledInput`<sup>Optional</sup> <a name="Nfsv41EnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput"></a>

```csharp
public bool|IResolvable Nfsv41EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RootAccessEnabledInput`<sup>Optional</sup> <a name="RootAccessEnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```csharp
public bool|IResolvable RootAccessEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RuleIndexInput`<sup>Optional</sup> <a name="RuleIndexInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```csharp
public double RuleIndexInput { get; }
```

- *Type:* double

---

##### `UnixReadOnlyInput`<sup>Optional</sup> <a name="UnixReadOnlyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```csharp
public bool|IResolvable UnixReadOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnixReadWriteInput`<sup>Optional</sup> <a name="UnixReadWriteInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```csharp
public bool|IResolvable UnixReadWriteInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```csharp
public string AllowedClients { get; }
```

- *Type:* string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```csharp
public bool|IResolvable Nfsv3Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Nfsv41Enabled`<sup>Required</sup> <a name="Nfsv41Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```csharp
public bool|IResolvable Nfsv41Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RootAccessEnabled`<sup>Required</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```csharp
public bool|IResolvable RootAccessEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```csharp
public double RuleIndex { get; }
```

- *Type:* double

---

##### `UnixReadOnly`<sup>Required</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```csharp
public bool|IResolvable UnixReadOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UnixReadWrite`<sup>Required</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```csharp
public bool|IResolvable UnixReadWrite { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>

---


### NetappVolumeGroupOracleVolumeList <a name="NetappVolumeGroupOracleVolumeList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get"></a>

```csharp
private NetappVolumeGroupOracleVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolume[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>[]

---


### NetappVolumeGroupOracleVolumeOutputReference <a name="NetappVolumeGroupOracleVolumeOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeGroupOracleVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication">PutDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy">PutDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule">PutExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication">ResetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy">ResetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource">ResetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId">ResetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures">ResetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataProtectionReplication` <a name="PutDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication"></a>

```csharp
private void PutDataProtectionReplication(NetappVolumeGroupOracleVolumeDataProtectionReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---

##### `PutDataProtectionSnapshotPolicy` <a name="PutDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy"></a>

```csharp
private void PutDataProtectionSnapshotPolicy(NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---

##### `PutExportPolicyRule` <a name="PutExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule"></a>

```csharp
private void PutExportPolicyRule(IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]

---

##### `ResetDataProtectionReplication` <a name="ResetDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication"></a>

```csharp
private void ResetDataProtectionReplication()
```

##### `ResetDataProtectionSnapshotPolicy` <a name="ResetDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy"></a>

```csharp
private void ResetDataProtectionSnapshotPolicy()
```

##### `ResetEncryptionKeySource` <a name="ResetEncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource"></a>

```csharp
private void ResetEncryptionKeySource()
```

##### `ResetKeyVaultPrivateEndpointId` <a name="ResetKeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId"></a>

```csharp
private void ResetKeyVaultPrivateEndpointId()
```

##### `ResetNetworkFeatures` <a name="ResetNetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures"></a>

```csharp
private void ResetNetworkFeatures()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId"></a>

```csharp
private void ResetProximityPlacementGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule">ExportPolicyRule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses">MountIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput">CapacityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput">DataProtectionReplicationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput">DataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput">EncryptionKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput">ExportPolicyRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput">KeyVaultPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput">NetworkFeaturesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput">SnapshotDirectoryVisibleInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput">StorageQuotaInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput">ThroughputInMibpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput">VolumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput">VolumeSpecNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId">CapacityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures">NetworkFeatures</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps">ThroughputInMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath">VolumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName">VolumeSpecName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference DataProtectionReplication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a>

---

##### `DataProtectionSnapshotPolicy`<sup>Required</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference DataProtectionSnapshotPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule"></a>

```csharp
public NetappVolumeGroupOracleVolumeExportPolicyRuleList ExportPolicyRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses"></a>

```csharp
public string[] MountIpAddresses { get; }
```

- *Type:* string[]

---

##### `CapacityPoolIdInput`<sup>Optional</sup> <a name="CapacityPoolIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput"></a>

```csharp
public string CapacityPoolIdInput { get; }
```

- *Type:* string

---

##### `DataProtectionReplicationInput`<sup>Optional</sup> <a name="DataProtectionReplicationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionReplication DataProtectionReplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---

##### `DataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput"></a>

```csharp
public NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---

##### `EncryptionKeySourceInput`<sup>Optional</sup> <a name="EncryptionKeySourceInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput"></a>

```csharp
public string EncryptionKeySourceInput { get; }
```

- *Type:* string

---

##### `ExportPolicyRuleInput`<sup>Optional</sup> <a name="ExportPolicyRuleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolumeExportPolicyRule[] ExportPolicyRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule">NetappVolumeGroupOracleVolumeExportPolicyRule</a>[]

---

##### `KeyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput"></a>

```csharp
public string KeyVaultPrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFeaturesInput`<sup>Optional</sup> <a name="NetworkFeaturesInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput"></a>

```csharp
public string NetworkFeaturesInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput"></a>

```csharp
public string ProximityPlacementGroupIdInput { get; }
```

- *Type:* string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput"></a>

```csharp
public string ServiceLevelInput { get; }
```

- *Type:* string

---

##### `SnapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="SnapshotDirectoryVisibleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisibleInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StorageQuotaInGbInput`<sup>Optional</sup> <a name="StorageQuotaInGbInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput"></a>

```csharp
public double StorageQuotaInGbInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInMibpsInput`<sup>Optional</sup> <a name="ThroughputInMibpsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput"></a>

```csharp
public double ThroughputInMibpsInput { get; }
```

- *Type:* double

---

##### `VolumePathInput`<sup>Optional</sup> <a name="VolumePathInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput"></a>

```csharp
public string VolumePathInput { get; }
```

- *Type:* string

---

##### `VolumeSpecNameInput`<sup>Optional</sup> <a name="VolumeSpecNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput"></a>

```csharp
public string VolumeSpecNameInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `CapacityPoolId`<sup>Required</sup> <a name="CapacityPoolId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId"></a>

```csharp
public string CapacityPoolId { get; }
```

- *Type:* string

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource"></a>

```csharp
public string EncryptionKeySource { get; }
```

- *Type:* string

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId"></a>

```csharp
public string KeyVaultPrivateEndpointId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures"></a>

```csharp
public string NetworkFeatures { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId"></a>

```csharp
public string ProximityPlacementGroupId { get; }
```

- *Type:* string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisible { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb"></a>

```csharp
public double StorageQuotaInGb { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps"></a>

```csharp
public double ThroughputInMibps { get; }
```

- *Type:* double

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath"></a>

```csharp
public string VolumePath { get; }
```

- *Type:* string

---

##### `VolumeSpecName`<sup>Required</sup> <a name="VolumeSpecName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName"></a>

```csharp
public string VolumeSpecName { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeGroupOracleVolume InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume">NetappVolumeGroupOracleVolume</a>

---



