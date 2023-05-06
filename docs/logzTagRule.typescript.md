# `azurerm_logz_tag_rule`

Refer to the Terraform Registory for docs: [`azurerm_logz_tag_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule).

# `logzTagRule` Submodule <a name="`logzTagRule` Submodule" id="@cdktf/provider-azurerm.logzTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogzTagRule <a name="LogzTagRule" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule azurerm_logz_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

new logzTagRule.LogzTagRule(scope: Construct, id: string, config: LogzTagRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig">LogzTagRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig">LogzTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTagFilter">putTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendAadLogs">resetSendAadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendActivityLogs">resetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendSubscriptionLogs">resetSendSubscriptionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetTagFilter">resetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTagFilter` <a name="putTagFilter" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTagFilter"></a>

```typescript
public putTagFilter(value: IResolvable | LogzTagRuleTagFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTagFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTimeouts"></a>

```typescript
public putTimeouts(value: LogzTagRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSendAadLogs` <a name="resetSendAadLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendAadLogs"></a>

```typescript
public resetSendAadLogs(): void
```

##### `resetSendActivityLogs` <a name="resetSendActivityLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendActivityLogs"></a>

```typescript
public resetSendActivityLogs(): void
```

##### `resetSendSubscriptionLogs` <a name="resetSendSubscriptionLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetSendSubscriptionLogs"></a>

```typescript
public resetSendSubscriptionLogs(): void
```

##### `resetTagFilter` <a name="resetTagFilter" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetTagFilter"></a>

```typescript
public resetTagFilter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isConstruct"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

logzTagRule.LogzTagRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformElement"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

logzTagRule.LogzTagRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformResource"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

logzTagRule.LogzTagRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList">LogzTagRuleTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference">LogzTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.logzMonitorIdInput">logzMonitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendAadLogsInput">sendAadLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendActivityLogsInput">sendActivityLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendSubscriptionLogsInput">sendSubscriptionLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tagFilterInput">tagFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.logzMonitorId">logzMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendAadLogs">sendAadLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendActivityLogs">sendActivityLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tagFilter"></a>

```typescript
public readonly tagFilter: LogzTagRuleTagFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList">LogzTagRuleTagFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.timeouts"></a>

```typescript
public readonly timeouts: LogzTagRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference">LogzTagRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logzMonitorIdInput`<sup>Optional</sup> <a name="logzMonitorIdInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.logzMonitorIdInput"></a>

```typescript
public readonly logzMonitorIdInput: string;
```

- *Type:* string

---

##### `sendAadLogsInput`<sup>Optional</sup> <a name="sendAadLogsInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendAadLogsInput"></a>

```typescript
public readonly sendAadLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendActivityLogsInput`<sup>Optional</sup> <a name="sendActivityLogsInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendActivityLogsInput"></a>

```typescript
public readonly sendActivityLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogsInput`<sup>Optional</sup> <a name="sendSubscriptionLogsInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendSubscriptionLogsInput"></a>

```typescript
public readonly sendSubscriptionLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tagFilterInput"></a>

```typescript
public readonly tagFilterInput: IResolvable | LogzTagRuleTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LogzTagRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logzMonitorId`<sup>Required</sup> <a name="logzMonitorId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.logzMonitorId"></a>

```typescript
public readonly logzMonitorId: string;
```

- *Type:* string

---

##### `sendAadLogs`<sup>Required</sup> <a name="sendAadLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendAadLogs"></a>

```typescript
public readonly sendAadLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendActivityLogs`<sup>Required</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendActivityLogs"></a>

```typescript
public readonly sendActivityLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendSubscriptionLogs`<sup>Required</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.sendSubscriptionLogs"></a>

```typescript
public readonly sendSubscriptionLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogzTagRuleConfig <a name="LogzTagRuleConfig" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

const logzTagRuleConfig: logzTagRule.LogzTagRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.logzMonitorId">logzMonitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#logz_monitor_id LogzTagRule#logz_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#id LogzTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendAadLogs">sendAadLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_aad_logs LogzTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendActivityLogs">sendActivityLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_activity_logs LogzTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendSubscriptionLogs">sendSubscriptionLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_subscription_logs LogzTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.tagFilter">tagFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]</code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logzMonitorId`<sup>Required</sup> <a name="logzMonitorId" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.logzMonitorId"></a>

```typescript
public readonly logzMonitorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#logz_monitor_id LogzTagRule#logz_monitor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#id LogzTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendAadLogs`<sup>Optional</sup> <a name="sendAadLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendAadLogs"></a>

```typescript
public readonly sendAadLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_aad_logs LogzTagRule#send_aad_logs}.

---

##### `sendActivityLogs`<sup>Optional</sup> <a name="sendActivityLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendActivityLogs"></a>

```typescript
public readonly sendActivityLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_activity_logs LogzTagRule#send_activity_logs}.

---

##### `sendSubscriptionLogs`<sup>Optional</sup> <a name="sendSubscriptionLogs" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.sendSubscriptionLogs"></a>

```typescript
public readonly sendSubscriptionLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#send_subscription_logs LogzTagRule#send_subscription_logs}.

---

##### `tagFilter`<sup>Optional</sup> <a name="tagFilter" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.tagFilter"></a>

```typescript
public readonly tagFilter: IResolvable | LogzTagRuleTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#tag_filter LogzTagRule#tag_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogzTagRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#timeouts LogzTagRule#timeouts}

---

### LogzTagRuleTagFilter <a name="LogzTagRuleTagFilter" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

const logzTagRuleTagFilter: logzTagRule.LogzTagRuleTagFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#action LogzTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#name LogzTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#value LogzTagRule#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#action LogzTagRule#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#name LogzTagRule#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#value LogzTagRule#value}.

---

### LogzTagRuleTimeouts <a name="LogzTagRuleTimeouts" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

const logzTagRuleTimeouts: logzTagRule.LogzTagRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#create LogzTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#delete LogzTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#read LogzTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#update LogzTagRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#create LogzTagRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#delete LogzTagRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#read LogzTagRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logz_tag_rule#update LogzTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogzTagRuleTagFilterList <a name="LogzTagRuleTagFilterList" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

new logzTagRule.LogzTagRuleTagFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.get"></a>

```typescript
public get(index: number): LogzTagRuleTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogzTagRuleTagFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a>[]

---


### LogzTagRuleTagFilterOutputReference <a name="LogzTagRuleTagFilterOutputReference" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

new logzTagRule.LogzTagRuleTagFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogzTagRuleTagFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTagFilter">LogzTagRuleTagFilter</a> | cdktf.IResolvable

---


### LogzTagRuleTimeoutsOutputReference <a name="LogzTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { logzTagRule } from '@cdktf/provider-azurerm'

new logzTagRule.LogzTagRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogzTagRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzTagRule.LogzTagRuleTimeouts">LogzTagRuleTimeouts</a> | cdktf.IResolvable

---



