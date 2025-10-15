# `netappVolumeQuotaRule` Submodule <a name="`netappVolumeQuotaRule` Submodule" id="@cdktf/provider-azurerm.netappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeQuotaRule <a name="NetappVolumeQuotaRule" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule azurerm_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeQuotaRule(Construct Scope, string Id, NetappVolumeQuotaRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig">NetappVolumeQuotaRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig">NetappVolumeQuotaRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetQuotaTarget">ResetQuotaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappVolumeQuotaRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQuotaTarget` <a name="ResetQuotaTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetQuotaTarget"></a>

```csharp
private void ResetQuotaTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeQuotaRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeQuotaRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeQuotaRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetappVolumeQuotaRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolumeQuotaRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaSizeInKibInput">QuotaSizeInKibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTargetInput">QuotaTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTypeInput">QuotaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaSizeInKib">QuotaSizeInKib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTarget">QuotaTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaType">QuotaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts"></a>

```csharp
public NetappVolumeQuotaRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QuotaSizeInKibInput`<sup>Optional</sup> <a name="QuotaSizeInKibInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaSizeInKibInput"></a>

```csharp
public double QuotaSizeInKibInput { get; }
```

- *Type:* double

---

##### `QuotaTargetInput`<sup>Optional</sup> <a name="QuotaTargetInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTargetInput"></a>

```csharp
public string QuotaTargetInput { get; }
```

- *Type:* string

---

##### `QuotaTypeInput`<sup>Optional</sup> <a name="QuotaTypeInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTypeInput"></a>

```csharp
public string QuotaTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput"></a>

```csharp
public IResolvable|NetappVolumeQuotaRuleTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QuotaSizeInKib`<sup>Required</sup> <a name="QuotaSizeInKib" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaSizeInKib"></a>

```csharp
public double QuotaSizeInKib { get; }
```

- *Type:* double

---

##### `QuotaTarget`<sup>Required</sup> <a name="QuotaTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaTarget"></a>

```csharp
public string QuotaTarget { get; }
```

- *Type:* string

---

##### `QuotaType`<sup>Required</sup> <a name="QuotaType" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.quotaType"></a>

```csharp
public string QuotaType { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeQuotaRuleConfig <a name="NetappVolumeQuotaRuleConfig" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeQuotaRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    double QuotaSizeInKib,
    string QuotaType,
    string VolumeId,
    string Id = null,
    string QuotaTarget = null,
    NetappVolumeQuotaRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#location NetappVolumeQuotaRule#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#name NetappVolumeQuotaRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaSizeInKib">QuotaSizeInKib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_size_in_kib NetappVolumeQuotaRule#quota_size_in_kib}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaType">QuotaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_type NetappVolumeQuotaRule#quota_type}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeId">VolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#volume_id NetappVolumeQuotaRule#volume_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaTarget">QuotaTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_target NetappVolumeQuotaRule#quota_target}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#location NetappVolumeQuotaRule#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#name NetappVolumeQuotaRule#name}.

---

##### `QuotaSizeInKib`<sup>Required</sup> <a name="QuotaSizeInKib" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaSizeInKib"></a>

```csharp
public double QuotaSizeInKib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_size_in_kib NetappVolumeQuotaRule#quota_size_in_kib}.

---

##### `QuotaType`<sup>Required</sup> <a name="QuotaType" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaType"></a>

```csharp
public string QuotaType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_type NetappVolumeQuotaRule#quota_type}.

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#volume_id NetappVolumeQuotaRule#volume_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QuotaTarget`<sup>Optional</sup> <a name="QuotaTarget" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.quotaTarget"></a>

```csharp
public string QuotaTarget { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#quota_target NetappVolumeQuotaRule#quota_target}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts"></a>

```csharp
public NetappVolumeQuotaRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#timeouts NetappVolumeQuotaRule#timeouts}

---

### NetappVolumeQuotaRuleTimeouts <a name="NetappVolumeQuotaRuleTimeouts" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeQuotaRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#read NetappVolumeQuotaRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#read NetappVolumeQuotaRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeQuotaRuleTimeoutsOutputReference <a name="NetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetappVolumeQuotaRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeQuotaRuleTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

---



