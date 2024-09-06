# `paloAltoLocalRulestackFqdnList` Submodule <a name="`paloAltoLocalRulestackFqdnList` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackFqdnList <a name="PaloAltoLocalRulestackFqdnList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list azurerm_palo_alto_local_rulestack_fqdn_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackFqdnList(Construct Scope, string Id, PaloAltoLocalRulestackFqdnListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig">PaloAltoLocalRulestackFqdnListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig">PaloAltoLocalRulestackFqdnListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts"></a>

```csharp
private void PutTimeouts(PaloAltoLocalRulestackFqdnListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetAuditComment"></a>

```csharp
private void ResetAuditComment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackFqdnList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackFqdnList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackFqdnList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackFqdnList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackFqdnList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PaloAltoLocalRulestackFqdnList resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoLocalRulestackFqdnList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoLocalRulestackFqdnList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackFqdnList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference">PaloAltoLocalRulestackFqdnListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditCommentInput">AuditCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNamesInput">FullyQualifiedDomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackIdInput">RulestackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditComment">AuditComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNames">FullyQualifiedDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackId">RulestackId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackFqdnListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference">PaloAltoLocalRulestackFqdnListTimeoutsOutputReference</a>

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditCommentInput"></a>

```csharp
public string AuditCommentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedDomainNamesInput`<sup>Optional</sup> <a name="FullyQualifiedDomainNamesInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNamesInput"></a>

```csharp
public string[] FullyQualifiedDomainNamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackIdInput"></a>

```csharp
public string RulestackIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.auditComment"></a>

```csharp
public string AuditComment { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FullyQualifiedDomainNames`<sup>Required</sup> <a name="FullyQualifiedDomainNames" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.fullyQualifiedDomainNames"></a>

```csharp
public string[] FullyQualifiedDomainNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.rulestackId"></a>

```csharp
public string RulestackId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackFqdnListConfig <a name="PaloAltoLocalRulestackFqdnListConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackFqdnListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] FullyQualifiedDomainNames,
    string Name,
    string RulestackId,
    string AuditComment = null,
    string Description = null,
    string Id = null,
    PaloAltoLocalRulestackFqdnListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.fullyQualifiedDomainNames">FullyQualifiedDomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#fully_qualified_domain_names PaloAltoLocalRulestackFqdnList#fully_qualified_domain_names}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#name PaloAltoLocalRulestackFqdnList#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.rulestackId">RulestackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#rulestack_id PaloAltoLocalRulestackFqdnList#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.auditComment">AuditComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#audit_comment PaloAltoLocalRulestackFqdnList#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#description PaloAltoLocalRulestackFqdnList#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#id PaloAltoLocalRulestackFqdnList#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FullyQualifiedDomainNames`<sup>Required</sup> <a name="FullyQualifiedDomainNames" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.fullyQualifiedDomainNames"></a>

```csharp
public string[] FullyQualifiedDomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#fully_qualified_domain_names PaloAltoLocalRulestackFqdnList#fully_qualified_domain_names}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#name PaloAltoLocalRulestackFqdnList#name}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.rulestackId"></a>

```csharp
public string RulestackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#rulestack_id PaloAltoLocalRulestackFqdnList#rulestack_id}.

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.auditComment"></a>

```csharp
public string AuditComment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#audit_comment PaloAltoLocalRulestackFqdnList#audit_comment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#description PaloAltoLocalRulestackFqdnList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#id PaloAltoLocalRulestackFqdnList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListConfig.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackFqdnListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts">PaloAltoLocalRulestackFqdnListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#timeouts PaloAltoLocalRulestackFqdnList#timeouts}

---

### PaloAltoLocalRulestackFqdnListTimeouts <a name="PaloAltoLocalRulestackFqdnListTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackFqdnListTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#create PaloAltoLocalRulestackFqdnList#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#delete PaloAltoLocalRulestackFqdnList#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#read PaloAltoLocalRulestackFqdnList#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#update PaloAltoLocalRulestackFqdnList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#create PaloAltoLocalRulestackFqdnList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#delete PaloAltoLocalRulestackFqdnList#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#read PaloAltoLocalRulestackFqdnList#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/palo_alto_local_rulestack_fqdn_list#update PaloAltoLocalRulestackFqdnList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackFqdnListTimeoutsOutputReference <a name="PaloAltoLocalRulestackFqdnListTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackFqdnListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackFqdnList.PaloAltoLocalRulestackFqdnListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



