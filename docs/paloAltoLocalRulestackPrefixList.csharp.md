# `azurerm_palo_alto_local_rulestack_prefix_list`

Refer to the Terraform Registory for docs: [`azurerm_palo_alto_local_rulestack_prefix_list`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list).

# `paloAltoLocalRulestackPrefixList` Submodule <a name="`paloAltoLocalRulestackPrefixList` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackPrefixList <a name="PaloAltoLocalRulestackPrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list azurerm_palo_alto_local_rulestack_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackPrefixList(Construct Scope, string Id, PaloAltoLocalRulestackPrefixListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig">PaloAltoLocalRulestackPrefixListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig">PaloAltoLocalRulestackPrefixListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts"></a>

```csharp
private void PutTimeouts(PaloAltoLocalRulestackPrefixListTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetAuditComment"></a>

```csharp
private void ResetAuditComment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackPrefixList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackPrefixList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoLocalRulestackPrefixList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference">PaloAltoLocalRulestackPrefixListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditCommentInput">AuditCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixListInput">PrefixListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackIdInput">RulestackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditComment">AuditComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixList">PrefixList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackId">RulestackId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackPrefixListTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference">PaloAltoLocalRulestackPrefixListTimeoutsOutputReference</a>

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditCommentInput"></a>

```csharp
public string AuditCommentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrefixListInput`<sup>Optional</sup> <a name="PrefixListInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixListInput"></a>

```csharp
public string[] PrefixListInput { get; }
```

- *Type:* string[]

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackIdInput"></a>

```csharp
public string RulestackIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.auditComment"></a>

```csharp
public string AuditComment { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.prefixList"></a>

```csharp
public string[] PrefixList { get; }
```

- *Type:* string[]

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.rulestackId"></a>

```csharp
public string RulestackId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackPrefixListConfig <a name="PaloAltoLocalRulestackPrefixListConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackPrefixListConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] PrefixList,
    string RulestackId,
    string AuditComment = null,
    string Description = null,
    string Id = null,
    PaloAltoLocalRulestackPrefixListTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#name PaloAltoLocalRulestackPrefixList#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.prefixList">PrefixList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#prefix_list PaloAltoLocalRulestackPrefixList#prefix_list}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.rulestackId">RulestackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#rulestack_id PaloAltoLocalRulestackPrefixList#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.auditComment">AuditComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#audit_comment PaloAltoLocalRulestackPrefixList#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#description PaloAltoLocalRulestackPrefixList#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#id PaloAltoLocalRulestackPrefixList#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#name PaloAltoLocalRulestackPrefixList#name}.

---

##### `PrefixList`<sup>Required</sup> <a name="PrefixList" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.prefixList"></a>

```csharp
public string[] PrefixList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#prefix_list PaloAltoLocalRulestackPrefixList#prefix_list}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.rulestackId"></a>

```csharp
public string RulestackId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#rulestack_id PaloAltoLocalRulestackPrefixList#rulestack_id}.

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.auditComment"></a>

```csharp
public string AuditComment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#audit_comment PaloAltoLocalRulestackPrefixList#audit_comment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#description PaloAltoLocalRulestackPrefixList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#id PaloAltoLocalRulestackPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListConfig.property.timeouts"></a>

```csharp
public PaloAltoLocalRulestackPrefixListTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts">PaloAltoLocalRulestackPrefixListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#timeouts PaloAltoLocalRulestackPrefixList#timeouts}

---

### PaloAltoLocalRulestackPrefixListTimeouts <a name="PaloAltoLocalRulestackPrefixListTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackPrefixListTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#create PaloAltoLocalRulestackPrefixList#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#delete PaloAltoLocalRulestackPrefixList#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#read PaloAltoLocalRulestackPrefixList#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#update PaloAltoLocalRulestackPrefixList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#create PaloAltoLocalRulestackPrefixList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#delete PaloAltoLocalRulestackPrefixList#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#read PaloAltoLocalRulestackPrefixList#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_prefix_list#update PaloAltoLocalRulestackPrefixList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackPrefixListTimeoutsOutputReference <a name="PaloAltoLocalRulestackPrefixListTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoLocalRulestackPrefixListTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackPrefixList.PaloAltoLocalRulestackPrefixListTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



