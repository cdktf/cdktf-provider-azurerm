# `data_azurerm_app_configuration_keys`

Refer to the Terraform Registory for docs: [`data_azurerm_app_configuration_keys`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys).

# `dataAzurermAppConfigurationKeys` Submodule <a name="`dataAzurermAppConfigurationKeys` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppConfigurationKeys <a name="DataAzurermAppConfigurationKeys" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys azurerm_app_configuration_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeys(Construct Scope, string Id, DataAzurermAppConfigurationKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig">DataAzurermAppConfigurationKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig">DataAzurermAppConfigurationKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermAppConfigurationKeysTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppConfigurationKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppConfigurationKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppConfigurationKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.items">Items</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList">DataAzurermAppConfigurationKeysItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference">DataAzurermAppConfigurationKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreIdInput">ConfigurationStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreId">ConfigurationStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.label">Label</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.items"></a>

```csharp
public DataAzurermAppConfigurationKeysItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList">DataAzurermAppConfigurationKeysItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeouts"></a>

```csharp
public DataAzurermAppConfigurationKeysTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference">DataAzurermAppConfigurationKeysTimeoutsOutputReference</a>

---

##### `ConfigurationStoreIdInput`<sup>Optional</sup> <a name="ConfigurationStoreIdInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreIdInput"></a>

```csharp
public string ConfigurationStoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConfigurationStoreId`<sup>Required</sup> <a name="ConfigurationStoreId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.configurationStoreId"></a>

```csharp
public string ConfigurationStoreId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppConfigurationKeysConfig <a name="DataAzurermAppConfigurationKeysConfig" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigurationStoreId,
    string Id = null,
    string Key = null,
    string Label = null,
    DataAzurermAppConfigurationKeysTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.configurationStoreId">ConfigurationStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigurationStoreId`<sup>Required</sup> <a name="ConfigurationStoreId" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.configurationStoreId"></a>

```csharp
public string ConfigurationStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#configuration_store_id DataAzurermAppConfigurationKeys#configuration_store_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#id DataAzurermAppConfigurationKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#key DataAzurermAppConfigurationKeys#key}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#label DataAzurermAppConfigurationKeys#label}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysConfig.property.timeouts"></a>

```csharp
public DataAzurermAppConfigurationKeysTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts">DataAzurermAppConfigurationKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#timeouts DataAzurermAppConfigurationKeys#timeouts}

---

### DataAzurermAppConfigurationKeysItems <a name="DataAzurermAppConfigurationKeysItems" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysItems {

};
```


### DataAzurermAppConfigurationKeysTimeouts <a name="DataAzurermAppConfigurationKeysTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#read DataAzurermAppConfigurationKeys#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_configuration_keys#read DataAzurermAppConfigurationKeys#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppConfigurationKeysItemsList <a name="DataAzurermAppConfigurationKeysItemsList" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get"></a>

```csharp
private DataAzurermAppConfigurationKeysItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermAppConfigurationKeysItemsOutputReference <a name="DataAzurermAppConfigurationKeysItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.locked">Locked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.vaultKeyReference">VaultKeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems">DataAzurermAppConfigurationKeysItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VaultKeyReference`<sup>Required</sup> <a name="VaultKeyReference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.vaultKeyReference"></a>

```csharp
public string VaultKeyReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItemsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermAppConfigurationKeysItems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysItems">DataAzurermAppConfigurationKeysItems</a>

---


### DataAzurermAppConfigurationKeysTimeoutsOutputReference <a name="DataAzurermAppConfigurationKeysTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppConfigurationKeysTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppConfigurationKeys.DataAzurermAppConfigurationKeysTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



