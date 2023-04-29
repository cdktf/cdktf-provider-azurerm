# `data_azurerm_eventhub_authorization_rule`

Refer to the Terraform Registory for docs: [`data_azurerm_eventhub_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule).

# `dataAzurermEventhubAuthorizationRule` Submodule <a name="`dataAzurermEventhubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermEventhubAuthorizationRule <a name="DataAzurermEventhubAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule azurerm_eventhub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

dataazurermeventhubauthorizationrule.NewDataAzurermEventhubAuthorizationRule(scope Construct, id *string, config DataAzurermEventhubAuthorizationRuleConfig) DataAzurermEventhubAuthorizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig">DataAzurermEventhubAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig">DataAzurermEventhubAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermEventhubAuthorizationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetListen"></a>

```go
func ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetManage"></a>

```go
func ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetSend"></a>

```go
func ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

dataazurermeventhubauthorizationrule.DataAzurermEventhubAuthorizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

dataazurermeventhubauthorizationrule.DataAzurermEventhubAuthorizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

dataazurermeventhubauthorizationrule.DataAzurermEventhubAuthorizationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference">DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubNameInput">EventhubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.sendInput">SendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubName">EventhubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listen">Listen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manage">Manage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.send">Send</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryConnectionStringAlias"></a>

```go
func PrimaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```go
func SecondaryConnectionStringAlias() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeouts"></a>

```go
func Timeouts() DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference">DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubNameInput"></a>

```go
func EventhubNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listenInput"></a>

```go
func ListenInput() interface{}
```

- *Type:* interface{}

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manageInput"></a>

```go
func ManageInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.sendInput"></a>

```go
func SendInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.eventhubName"></a>

```go
func EventhubName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.listen"></a>

```go
func Listen() interface{}
```

- *Type:* interface{}

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.manage"></a>

```go
func Manage() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.send"></a>

```go
func Send() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermEventhubAuthorizationRuleConfig <a name="DataAzurermEventhubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

&dataazurermeventhubauthorizationrule.DataAzurermEventhubAuthorizationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventhubName: *string,
	Name: *string,
	NamespaceName: *string,
	ResourceGroupName: *string,
	Id: *string,
	Listen: interface{},
	Manage: interface{},
	Send: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.eventhubName">EventhubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.send">Send</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.eventhubName"></a>

```go
EventhubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#eventhub_name DataAzurermEventhubAuthorizationRule#eventhub_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#name DataAzurermEventhubAuthorizationRule#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#namespace_name DataAzurermEventhubAuthorizationRule#namespace_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#resource_group_name DataAzurermEventhubAuthorizationRule#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#id DataAzurermEventhubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.listen"></a>

```go
Listen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#listen DataAzurermEventhubAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.manage"></a>

```go
Manage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#manage DataAzurermEventhubAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.send"></a>

```go
Send interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#send DataAzurermEventhubAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleConfig.property.timeouts"></a>

```go
Timeouts DataAzurermEventhubAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts">DataAzurermEventhubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#timeouts DataAzurermEventhubAuthorizationRule#timeouts}

---

### DataAzurermEventhubAuthorizationRuleTimeouts <a name="DataAzurermEventhubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

&dataazurermeventhubauthorizationrule.DataAzurermEventhubAuthorizationRuleTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#read DataAzurermEventhubAuthorizationRule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/data-sources/eventhub_authorization_rule#read DataAzurermEventhubAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermeventhubauthorizationrule"

dataazurermeventhubauthorizationrule.NewDataAzurermEventhubAuthorizationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermEventhubAuthorizationRule.DataAzurermEventhubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



