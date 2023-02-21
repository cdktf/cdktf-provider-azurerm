# `sentinelAlertRuleMachineLearningBehaviorAnalytics` Submodule <a name="`sentinelAlertRuleMachineLearningBehaviorAnalytics` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalytics <a name="SentinelAlertRuleMachineLearningBehaviorAnalytics" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics azurerm_sentinel_alert_rule_machine_learning_behavior_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

new sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics(scope: Construct, id: string, config: SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig">SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig">SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuidInput">alertRuleTemplateGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference</a>

---

##### `alertRuleTemplateGuidInput`<sup>Optional</sup> <a name="alertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuidInput"></a>

```typescript
public readonly alertRuleTemplateGuidInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a> | cdktf.IResolvable

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.alertRuleTemplateGuid"></a>

```typescript
public readonly alertRuleTemplateGuid: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalytics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.Initializer"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

const sentinelAlertRuleMachineLearningBehaviorAnalyticsConfig: sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.alertRuleTemplateGuid">alertRuleTemplateGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alertRuleTemplateGuid`<sup>Required</sup> <a name="alertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.alertRuleTemplateGuid"></a>

```typescript
public readonly alertRuleTemplateGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#id SentinelAlertRuleMachineLearningBehaviorAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#timeouts SentinelAlertRuleMachineLearningBehaviorAnalytics#timeouts}

---

### SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.Initializer"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

const sentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts: sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#create SentinelAlertRuleMachineLearningBehaviorAnalytics#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#delete SentinelAlertRuleMachineLearningBehaviorAnalytics#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#read SentinelAlertRuleMachineLearningBehaviorAnalytics#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#update SentinelAlertRuleMachineLearningBehaviorAnalytics#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#create SentinelAlertRuleMachineLearningBehaviorAnalytics#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#delete SentinelAlertRuleMachineLearningBehaviorAnalytics#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#read SentinelAlertRuleMachineLearningBehaviorAnalytics#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics#update SentinelAlertRuleMachineLearningBehaviorAnalytics#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference <a name="SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelAlertRuleMachineLearningBehaviorAnalytics } from '@cdktf/provider-azurerm'

new sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleMachineLearningBehaviorAnalytics.SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts">SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts</a> | cdktf.IResolvable

---



