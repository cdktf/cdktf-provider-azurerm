# `dataAzurermPaloAltoLocalRulestack` Submodule <a name="`dataAzurermPaloAltoLocalRulestack` Submodule" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPaloAltoLocalRulestack <a name="DataAzurermPaloAltoLocalRulestack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.NewDataAzurermPaloAltoLocalRulestack(scope Construct, id *string, config DataAzurermPaloAltoLocalRulestackConfig) DataAzurermPaloAltoLocalRulestack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermPaloAltoLocalRulestackTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetTimeouts"></a>

```go
func ResetTimeouts()
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

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestack_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermPaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermPaloAltoLocalRulestack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermPaloAltoLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPaloAltoLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile">AntiSpywareProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile">AntiVirusProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription">DnsSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile">FileBlockingProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate">OutboundTrustCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate">OutboundUntrustCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile">VulnerabilityProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AntiSpywareProfile`<sup>Required</sup> <a name="AntiSpywareProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile"></a>

```go
func AntiSpywareProfile() *string
```

- *Type:* *string

---

##### `AntiVirusProfile`<sup>Required</sup> <a name="AntiVirusProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile"></a>

```go
func AntiVirusProfile() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsSubscription`<sup>Required</sup> <a name="DnsSubscription" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription"></a>

```go
func DnsSubscription() *string
```

- *Type:* *string

---

##### `FileBlockingProfile`<sup>Required</sup> <a name="FileBlockingProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile"></a>

```go
func FileBlockingProfile() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OutboundTrustCertificate`<sup>Required</sup> <a name="OutboundTrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate"></a>

```go
func OutboundTrustCertificate() *string
```

- *Type:* *string

---

##### `OutboundUntrustCertificate`<sup>Required</sup> <a name="OutboundUntrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate"></a>

```go
func OutboundUntrustCertificate() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts"></a>

```go
func Timeouts() DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a>

---

##### `UrlFilteringProfile`<sup>Required</sup> <a name="UrlFilteringProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile"></a>

```go
func UrlFilteringProfile() *string
```

- *Type:* *string

---

##### `VulnerabilityProfile`<sup>Required</sup> <a name="VulnerabilityProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile"></a>

```go
func VulnerabilityProfile() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPaloAltoLocalRulestackConfig <a name="DataAzurermPaloAltoLocalRulestackConfig" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

&dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts"></a>

```go
Timeouts DataAzurermPaloAltoLocalRulestackTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#timeouts DataAzurermPaloAltoLocalRulestack#timeouts}

---

### DataAzurermPaloAltoLocalRulestackTimeouts <a name="DataAzurermPaloAltoLocalRulestackTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

&dataazurermpaloaltolocalrulestack.DataAzurermPaloAltoLocalRulestackTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference <a name="DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermpaloaltolocalrulestack"

dataazurermpaloaltolocalrulestack.NewDataAzurermPaloAltoLocalRulestackTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



