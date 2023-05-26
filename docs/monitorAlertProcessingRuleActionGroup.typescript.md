# `azurerm_monitor_alert_processing_rule_action_group`

Refer to the Terraform Registory for docs: [`azurerm_monitor_alert_processing_rule_action_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group).

# `monitorAlertProcessingRuleActionGroup` Submodule <a name="`monitorAlertProcessingRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertProcessingRuleActionGroup <a name="MonitorAlertProcessingRuleActionGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group azurerm_monitor_alert_processing_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup(scope: Construct, id: string, config: MonitorAlertProcessingRuleActionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig">MonitorAlertProcessingRuleActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig">MonitorAlertProcessingRuleActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition"></a>

```typescript
public putCondition(value: MonitorAlertProcessingRuleActionGroupCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule"></a>

```typescript
public putSchedule(value: MonitorAlertProcessingRuleActionGroupSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorAlertProcessingRuleActionGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference">MonitorAlertProcessingRuleActionGroupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference">MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIdsInput">addActionGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIds">addActionGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.condition"></a>

```typescript
public readonly condition: MonitorAlertProcessingRuleActionGroupConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.schedule"></a>

```typescript
public readonly schedule: MonitorAlertProcessingRuleActionGroupScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference">MonitorAlertProcessingRuleActionGroupScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference">MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference</a>

---

##### `addActionGroupIdsInput`<sup>Optional</sup> <a name="addActionGroupIdsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIdsInput"></a>

```typescript
public readonly addActionGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.conditionInput"></a>

```typescript
public readonly conditionInput: MonitorAlertProcessingRuleActionGroupCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: MonitorAlertProcessingRuleActionGroupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MonitorAlertProcessingRuleActionGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a> | cdktf.IResolvable

---

##### `addActionGroupIds`<sup>Required</sup> <a name="addActionGroupIds" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIds"></a>

```typescript
public readonly addActionGroupIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertProcessingRuleActionGroupCondition <a name="MonitorAlertProcessingRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupCondition: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleName">alertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | alert_rule_name block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorCondition">monitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | monitor_condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.signalType">signalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | signal_type block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | target_resource block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceGroup">targetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | target_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `alertContext`<sup>Optional</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertContext"></a>

```typescript
public readonly alertContext: MonitorAlertProcessingRuleActionGroupConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#alert_context MonitorAlertProcessingRuleActionGroup#alert_context}

---

##### `alertRuleId`<sup>Optional</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#alert_rule_id MonitorAlertProcessingRuleActionGroup#alert_rule_id}

---

##### `alertRuleName`<sup>Optional</sup> <a name="alertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleName"></a>

```typescript
public readonly alertRuleName: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

alert_rule_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#alert_rule_name MonitorAlertProcessingRuleActionGroup#alert_rule_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.description"></a>

```typescript
public readonly description: MonitorAlertProcessingRuleActionGroupConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}

---

##### `monitorCondition`<sup>Optional</sup> <a name="monitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorCondition"></a>

```typescript
public readonly monitorCondition: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

monitor_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#monitor_condition MonitorAlertProcessingRuleActionGroup#monitor_condition}

---

##### `monitorService`<sup>Optional</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorService"></a>

```typescript
public readonly monitorService: MonitorAlertProcessingRuleActionGroupConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#monitor_service MonitorAlertProcessingRuleActionGroup#monitor_service}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.severity"></a>

```typescript
public readonly severity: MonitorAlertProcessingRuleActionGroupConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#severity MonitorAlertProcessingRuleActionGroup#severity}

---

##### `signalType`<sup>Optional</sup> <a name="signalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.signalType"></a>

```typescript
public readonly signalType: MonitorAlertProcessingRuleActionGroupConditionSignalType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

signal_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#signal_type MonitorAlertProcessingRuleActionGroup#signal_type}

---

##### `targetResource`<sup>Optional</sup> <a name="targetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResource"></a>

```typescript
public readonly targetResource: MonitorAlertProcessingRuleActionGroupConditionTargetResource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource MonitorAlertProcessingRuleActionGroup#target_resource}

---

##### `targetResourceGroup`<sup>Optional</sup> <a name="targetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceGroup"></a>

```typescript
public readonly targetResourceGroup: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

target_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource_group MonitorAlertProcessingRuleActionGroup#target_resource_group}

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#target_resource_type MonitorAlertProcessingRuleActionGroup#target_resource_type}

---

### MonitorAlertProcessingRuleActionGroupConditionAlertContext <a name="MonitorAlertProcessingRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionAlertContext: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionAlertRuleId <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionAlertRuleId: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionAlertRuleName <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionAlertRuleName: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionDescription <a name="MonitorAlertProcessingRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionDescription: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionMonitorCondition <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionMonitorCondition: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionMonitorService <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionMonitorService: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionSeverity <a name="MonitorAlertProcessingRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionSeverity: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionSignalType <a name="MonitorAlertProcessingRuleActionGroupConditionSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionSignalType: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResource <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionTargetResource: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionTargetResourceGroup: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResourceType <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConditionTargetResourceType: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConfig <a name="MonitorAlertProcessingRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupConfig: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.addActionGroupIds">addActionGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#add_action_group_ids MonitorAlertProcessingRuleActionGroup#add_action_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#name MonitorAlertProcessingRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#resource_group_name MonitorAlertProcessingRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#scopes MonitorAlertProcessingRuleActionGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#enabled MonitorAlertProcessingRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#id MonitorAlertProcessingRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#tags MonitorAlertProcessingRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addActionGroupIds`<sup>Required</sup> <a name="addActionGroupIds" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.addActionGroupIds"></a>

```typescript
public readonly addActionGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#add_action_group_ids MonitorAlertProcessingRuleActionGroup#add_action_group_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#name MonitorAlertProcessingRuleActionGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#resource_group_name MonitorAlertProcessingRuleActionGroup#resource_group_name}.

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#scopes MonitorAlertProcessingRuleActionGroup#scopes}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.condition"></a>

```typescript
public readonly condition: MonitorAlertProcessingRuleActionGroupCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#condition MonitorAlertProcessingRuleActionGroup#condition}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#enabled MonitorAlertProcessingRuleActionGroup#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#id MonitorAlertProcessingRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.schedule"></a>

```typescript
public readonly schedule: MonitorAlertProcessingRuleActionGroupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#schedule MonitorAlertProcessingRuleActionGroup#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#tags MonitorAlertProcessingRuleActionGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorAlertProcessingRuleActionGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#timeouts MonitorAlertProcessingRuleActionGroup#timeouts}

---

### MonitorAlertProcessingRuleActionGroupSchedule <a name="MonitorAlertProcessingRuleActionGroupSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupSchedule: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveFrom">effectiveFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#effective_from MonitorAlertProcessingRuleActionGroup#effective_from}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveUntil">effectiveUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#effective_until MonitorAlertProcessingRuleActionGroup#effective_until}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#time_zone MonitorAlertProcessingRuleActionGroup#time_zone}. |

---

##### `effectiveFrom`<sup>Optional</sup> <a name="effectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveFrom"></a>

```typescript
public readonly effectiveFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#effective_from MonitorAlertProcessingRuleActionGroup#effective_from}.

---

##### `effectiveUntil`<sup>Optional</sup> <a name="effectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveUntil"></a>

```typescript
public readonly effectiveUntil: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#effective_until MonitorAlertProcessingRuleActionGroup#effective_until}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorAlertProcessingRuleActionGroupScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#recurrence MonitorAlertProcessingRuleActionGroup#recurrence}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#time_zone MonitorAlertProcessingRuleActionGroup#time_zone}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrence <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupScheduleRecurrence: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.daily">daily</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]</code> | daily block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.monthly">monthly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]</code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.weekly">weekly</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]</code> | weekly block. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.daily"></a>

```typescript
public readonly daily: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#daily MonitorAlertProcessingRuleActionGroup#daily}

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.monthly"></a>

```typescript
public readonly monthly: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#monthly MonitorAlertProcessingRuleActionGroup#monthly}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.weekly"></a>

```typescript
public readonly weekly: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#weekly MonitorAlertProcessingRuleActionGroup#weekly}

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_month MonitorAlertProcessingRuleActionGroup#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_month MonitorAlertProcessingRuleActionGroup#days_of_month}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_week MonitorAlertProcessingRuleActionGroup#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#days_of_week MonitorAlertProcessingRuleActionGroup#days_of_week}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupTimeouts <a name="MonitorAlertProcessingRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

const monitorAlertProcessingRuleActionGroupTimeouts: monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#create MonitorAlertProcessingRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#delete MonitorAlertProcessingRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#read MonitorAlertProcessingRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#update MonitorAlertProcessingRuleActionGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#create MonitorAlertProcessingRuleActionGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#delete MonitorAlertProcessingRuleActionGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#read MonitorAlertProcessingRuleActionGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/monitor_alert_processing_rule_action_group#update MonitorAlertProcessingRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---


### MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---


### MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---


### MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---


### MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---


### MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---


### MonitorAlertProcessingRuleActionGroupConditionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext">putAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId">putAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName">putAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription">putDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition">putMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService">putMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity">putSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType">putSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource">putTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup">putTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType">putTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertContext">resetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleId">resetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleName">resetAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorCondition">resetMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorService">resetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSignalType">resetSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResource">resetTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceGroup">resetTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlertContext` <a name="putAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext"></a>

```typescript
public putAlertContext(value: MonitorAlertProcessingRuleActionGroupConditionAlertContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---

##### `putAlertRuleId` <a name="putAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```typescript
public putAlertRuleId(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---

##### `putAlertRuleName` <a name="putAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName"></a>

```typescript
public putAlertRuleName(value: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---

##### `putDescription` <a name="putDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription"></a>

```typescript
public putDescription(value: MonitorAlertProcessingRuleActionGroupConditionDescription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---

##### `putMonitorCondition` <a name="putMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition"></a>

```typescript
public putMonitorCondition(value: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---

##### `putMonitorService` <a name="putMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService"></a>

```typescript
public putMonitorService(value: MonitorAlertProcessingRuleActionGroupConditionMonitorService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---

##### `putSeverity` <a name="putSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity"></a>

```typescript
public putSeverity(value: MonitorAlertProcessingRuleActionGroupConditionSeverity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---

##### `putSignalType` <a name="putSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType"></a>

```typescript
public putSignalType(value: MonitorAlertProcessingRuleActionGroupConditionSignalType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---

##### `putTargetResource` <a name="putTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource"></a>

```typescript
public putTargetResource(value: MonitorAlertProcessingRuleActionGroupConditionTargetResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---

##### `putTargetResourceGroup` <a name="putTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup"></a>

```typescript
public putTargetResourceGroup(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---

##### `putTargetResourceType` <a name="putTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```typescript
public putTargetResourceType(value: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---

##### `resetAlertContext` <a name="resetAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```typescript
public resetAlertContext(): void
```

##### `resetAlertRuleId` <a name="resetAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```typescript
public resetAlertRuleId(): void
```

##### `resetAlertRuleName` <a name="resetAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleName"></a>

```typescript
public resetAlertRuleName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMonitorCondition` <a name="resetMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorCondition"></a>

```typescript
public resetMonitorCondition(): void
```

##### `resetMonitorService` <a name="resetMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```typescript
public resetMonitorService(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetSignalType` <a name="resetSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSignalType"></a>

```typescript
public resetSignalType(): void
```

##### `resetTargetResource` <a name="resetTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResource"></a>

```typescript
public resetTargetResource(): void
```

##### `resetTargetResourceGroup` <a name="resetTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceGroup"></a>

```typescript
public resetTargetResourceGroup(): void
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```typescript
public resetTargetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContext">alertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleId">alertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleName">alertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.description">description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference">MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorCondition">monitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorService">monitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severity">severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference">MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalType">signalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResource">targetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroup">targetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceType">targetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContextInput">alertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleIdInput">alertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleNameInput">alertRuleNameInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorConditionInput">monitorConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorServiceInput">monitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severityInput">severityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalTypeInput">signalTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroupInput">targetResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceInput">targetResourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertContext`<sup>Required</sup> <a name="alertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContext"></a>

```typescript
public readonly alertContext: MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `alertRuleId`<sup>Required</sup> <a name="alertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```typescript
public readonly alertRuleId: MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `alertRuleName`<sup>Required</sup> <a name="alertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleName"></a>

```typescript
public readonly alertRuleName: MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.description"></a>

```typescript
public readonly description: MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference">MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `monitorCondition`<sup>Required</sup> <a name="monitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorCondition"></a>

```typescript
public readonly monitorCondition: MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference</a>

---

##### `monitorService`<sup>Required</sup> <a name="monitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorService"></a>

```typescript
public readonly monitorService: MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference">MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference</a>

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalType"></a>

```typescript
public readonly signalType: MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResource"></a>

```typescript
public readonly targetResource: MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference</a>

---

##### `targetResourceGroup`<sup>Required</sup> <a name="targetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroup"></a>

```typescript
public readonly targetResourceGroup: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference</a>

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `alertContextInput`<sup>Optional</sup> <a name="alertContextInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```typescript
public readonly alertContextInput: MonitorAlertProcessingRuleActionGroupConditionAlertContext;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---

##### `alertRuleIdInput`<sup>Optional</sup> <a name="alertRuleIdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```typescript
public readonly alertRuleIdInput: MonitorAlertProcessingRuleActionGroupConditionAlertRuleId;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---

##### `alertRuleNameInput`<sup>Optional</sup> <a name="alertRuleNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleNameInput"></a>

```typescript
public readonly alertRuleNameInput: MonitorAlertProcessingRuleActionGroupConditionAlertRuleName;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: MonitorAlertProcessingRuleActionGroupConditionDescription;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---

##### `monitorConditionInput`<sup>Optional</sup> <a name="monitorConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorConditionInput"></a>

```typescript
public readonly monitorConditionInput: MonitorAlertProcessingRuleActionGroupConditionMonitorCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---

##### `monitorServiceInput`<sup>Optional</sup> <a name="monitorServiceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```typescript
public readonly monitorServiceInput: MonitorAlertProcessingRuleActionGroupConditionMonitorService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: MonitorAlertProcessingRuleActionGroupConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---

##### `signalTypeInput`<sup>Optional</sup> <a name="signalTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalTypeInput"></a>

```typescript
public readonly signalTypeInput: MonitorAlertProcessingRuleActionGroupConditionSignalType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---

##### `targetResourceGroupInput`<sup>Optional</sup> <a name="targetResourceGroupInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroupInput"></a>

```typescript
public readonly targetResourceGroupInput: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceInput"></a>

```typescript
public readonly targetResourceInput: MonitorAlertProcessingRuleActionGroupConditionTargetResource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---


### MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionSeverity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---


### MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionSignalType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionTargetResource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupConditionTargetResourceType;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveFrom">resetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveUntil">resetEffectiveUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence"></a>

```typescript
public putRecurrence(value: MonitorAlertProcessingRuleActionGroupScheduleRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---

##### `resetEffectiveFrom` <a name="resetEffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveFrom"></a>

```typescript
public resetEffectiveFrom(): void
```

##### `resetEffectiveUntil` <a name="resetEffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveUntil"></a>

```typescript
public resetEffectiveUntil(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFromInput">effectiveFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntilInput">effectiveUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrenceInput">recurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFrom">effectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntil">effectiveUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrence"></a>

```typescript
public readonly recurrence: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference</a>

---

##### `effectiveFromInput`<sup>Optional</sup> <a name="effectiveFromInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFromInput"></a>

```typescript
public readonly effectiveFromInput: string;
```

- *Type:* string

---

##### `effectiveUntilInput`<sup>Optional</sup> <a name="effectiveUntilInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntilInput"></a>

```typescript
public readonly effectiveUntilInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: MonitorAlertProcessingRuleActionGroupScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `effectiveFrom`<sup>Required</sup> <a name="effectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFrom"></a>

```typescript
public readonly effectiveFrom: string;
```

- *Type:* string

---

##### `effectiveUntil`<sup>Required</sup> <a name="effectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntil"></a>

```typescript
public readonly effectiveUntil: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get"></a>

```typescript
public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a> | cdktf.IResolvable

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get"></a>

```typescript
public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: number[];
```

- *Type:* number[]

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a> | cdktf.IResolvable

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaily` <a name="putDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily"></a>

```typescript
public putDaily(value: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]

---

##### `putMonthly` <a name="putMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly"></a>

```typescript
public putMonthly(value: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]

---

##### `putWeekly` <a name="putWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly"></a>

```typescript
public putWeekly(value: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]

---

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetMonthly"></a>

```typescript
public resetMonthly(): void
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetWeekly"></a>

```typescript
public resetWeekly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.dailyInput">dailyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weeklyInput">weeklyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.daily"></a>

```typescript
public readonly daily: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthly"></a>

```typescript
public readonly monthly: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weekly"></a>

```typescript
public readonly weekly: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily</a>[]

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthlyInput"></a>

```typescript
public readonly monthlyInput: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly</a>[]

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weeklyInput"></a>

```typescript
public readonly weeklyInput: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupScheduleRecurrence;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get"></a>

```typescript
public get(index: number): MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a>[]

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly</a> | cdktf.IResolvable

---


### MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference <a name="MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorAlertProcessingRuleActionGroup } from '@cdktf/provider-azurerm'

new monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorAlertProcessingRuleActionGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a> | cdktf.IResolvable

---



