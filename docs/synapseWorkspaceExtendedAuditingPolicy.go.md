# `azurerm_synapse_workspace_extended_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_synapse_workspace_extended_auditing_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy).

# `synapseWorkspaceExtendedAuditingPolicy` Submodule <a name="`synapseWorkspaceExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceExtendedAuditingPolicy <a name="SynapseWorkspaceExtendedAuditingPolicy" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy azurerm_synapse_workspace_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

synapseworkspaceextendedauditingpolicy.NewSynapseWorkspaceExtendedAuditingPolicy(scope Construct, id *string, config SynapseWorkspaceExtendedAuditingPolicyConfig) SynapseWorkspaceExtendedAuditingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig">SynapseWorkspaceExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig">SynapseWorkspaceExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled">ResetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">ResetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts"></a>

```go
func PutTimeouts(value SynapseWorkspaceExtendedAuditingPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLogMonitoringEnabled` <a name="ResetLogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```go
func ResetLogMonitoringEnabled()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountAccessKeyIsSecondary` <a name="ResetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```go
func ResetStorageAccountAccessKeyIsSecondary()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

synapseworkspaceextendedauditingpolicy.SynapseWorkspaceExtendedAuditingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

synapseworkspaceextendedauditingpolicy.SynapseWorkspaceExtendedAuditingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

synapseworkspaceextendedauditingpolicy.SynapseWorkspaceExtendedAuditingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput">LogMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">StorageAccountAccessKeyIsSecondaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeouts"></a>

```go
func Timeouts() SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference">SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabledInput`<sup>Optional</sup> <a name="LogMonitoringEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```go
func LogMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```go
func StorageAccountAccessKeyIsSecondaryInput() interface{}
```

- *Type:* interface{}

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceIdInput"></a>

```go
func SynapseWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabled`<sup>Required</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```go
func LogMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```go
func StorageAccountAccessKeyIsSecondary() interface{}
```

- *Type:* interface{}

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.synapseWorkspaceId"></a>

```go
func SynapseWorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceExtendedAuditingPolicyConfig <a name="SynapseWorkspaceExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

&synapseworkspaceextendedauditingpolicy.SynapseWorkspaceExtendedAuditingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SynapseWorkspaceId: *string,
	Id: *string,
	LogMonitoringEnabled: interface{},
	RetentionInDays: *f64,
	StorageAccountAccessKey: *string,
	StorageAccountAccessKeyIsSecondary: interface{},
	StorageEndpoint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.synapseWorkspaceId"></a>

```go
SynapseWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#synapse_workspace_id SynapseWorkspaceExtendedAuditingPolicy#synapse_workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#id SynapseWorkspaceExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogMonitoringEnabled`<sup>Optional</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```go
LogMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#log_monitoring_enabled SynapseWorkspaceExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#retention_in_days SynapseWorkspaceExtendedAuditingPolicy#retention_in_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key}.

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```go
StorageAccountAccessKeyIsSecondary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_account_access_key_is_secondary SynapseWorkspaceExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#storage_endpoint SynapseWorkspaceExtendedAuditingPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyConfig.property.timeouts"></a>

```go
Timeouts SynapseWorkspaceExtendedAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts">SynapseWorkspaceExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#timeouts SynapseWorkspaceExtendedAuditingPolicy#timeouts}

---

### SynapseWorkspaceExtendedAuditingPolicyTimeouts <a name="SynapseWorkspaceExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

&synapseworkspaceextendedauditingpolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#create SynapseWorkspaceExtendedAuditingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#delete SynapseWorkspaceExtendedAuditingPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#read SynapseWorkspaceExtendedAuditingPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/synapse_workspace_extended_auditing_policy#update SynapseWorkspaceExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/synapseworkspaceextendedauditingpolicy"

synapseworkspaceextendedauditingpolicy.NewSynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspaceExtendedAuditingPolicy.SynapseWorkspaceExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



