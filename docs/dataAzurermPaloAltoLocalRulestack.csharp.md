# `data_azurerm_palo_alto_local_rulestack`

Refer to the Terraform Registory for docs: [`data_azurerm_palo_alto_local_rulestack`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack).

# `dataAzurermPaloAltoLocalRulestack` Submodule <a name="`dataAzurermPaloAltoLocalRulestack` Submodule" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPaloAltoLocalRulestack <a name="DataAzurermPaloAltoLocalRulestack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPaloAltoLocalRulestack(Construct Scope, string Id, DataAzurermPaloAltoLocalRulestackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPaloAltoLocalRulestackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPaloAltoLocalRulestack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPaloAltoLocalRulestack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPaloAltoLocalRulestack.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPaloAltoLocalRulestack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermPaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPaloAltoLocalRulestack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPaloAltoLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPaloAltoLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile">AntiSpywareProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile">AntiVirusProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription">DnsSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile">FileBlockingProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate">OutboundTrustCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate">OutboundUntrustCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile">VulnerabilityProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AntiSpywareProfile`<sup>Required</sup> <a name="AntiSpywareProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile"></a>

```csharp
public string AntiSpywareProfile { get; }
```

- *Type:* string

---

##### `AntiVirusProfile`<sup>Required</sup> <a name="AntiVirusProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile"></a>

```csharp
public string AntiVirusProfile { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsSubscription`<sup>Required</sup> <a name="DnsSubscription" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription"></a>

```csharp
public string DnsSubscription { get; }
```

- *Type:* string

---

##### `FileBlockingProfile`<sup>Required</sup> <a name="FileBlockingProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile"></a>

```csharp
public string FileBlockingProfile { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OutboundTrustCertificate`<sup>Required</sup> <a name="OutboundTrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate"></a>

```csharp
public string OutboundTrustCertificate { get; }
```

- *Type:* string

---

##### `OutboundUntrustCertificate`<sup>Required</sup> <a name="OutboundUntrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate"></a>

```csharp
public string OutboundUntrustCertificate { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts"></a>

```csharp
public DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a>

---

##### `UrlFilteringProfile`<sup>Required</sup> <a name="UrlFilteringProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile"></a>

```csharp
public string UrlFilteringProfile { get; }
```

- *Type:* string

---

##### `VulnerabilityProfile`<sup>Required</sup> <a name="VulnerabilityProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile"></a>

```csharp
public string VulnerabilityProfile { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPaloAltoLocalRulestackConfig <a name="DataAzurermPaloAltoLocalRulestackConfig" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPaloAltoLocalRulestackConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermPaloAltoLocalRulestackTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts"></a>

```csharp
public DataAzurermPaloAltoLocalRulestackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#timeouts DataAzurermPaloAltoLocalRulestack#timeouts}

---

### DataAzurermPaloAltoLocalRulestackTimeouts <a name="DataAzurermPaloAltoLocalRulestackTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPaloAltoLocalRulestackTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference <a name="DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



