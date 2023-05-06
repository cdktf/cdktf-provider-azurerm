# `data_azurerm_servicebus_queue_authorization_rule`

Refer to the Terraform Registory for docs: [`data_azurerm_servicebus_queue_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule).

# `dataAzurermServicebusQueueAuthorizationRule` Submodule <a name="`dataAzurermServicebusQueueAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusQueueAuthorizationRule <a name="DataAzurermServicebusQueueAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule azurerm_servicebus_queue_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

new dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule(scope: Construct, id: string, config: DataAzurermServicebusQueueAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig">DataAzurermServicebusQueueAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig">DataAzurermServicebusQueueAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId">resetQueueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusQueueAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetQueueId` <a name="resetQueueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueId"></a>

```typescript
public resetQueueId(): void
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetQueueName"></a>

```typescript
public resetQueueName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen">listen</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage">manage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send">send</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.listen"></a>

```typescript
public readonly listen: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.manage"></a>

```typescript
public readonly manage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.send"></a>

```typescript
public readonly send: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermServicebusQueueAuthorizationRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusQueueAuthorizationRuleConfig <a name="DataAzurermServicebusQueueAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

const dataAzurermServicebusQueueAuthorizationRuleConfig: dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId">queueId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName">queueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#name DataAzurermServicebusQueueAuthorizationRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#id DataAzurermServicebusQueueAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#namespace_name DataAzurermServicebusQueueAuthorizationRule#namespace_name}.

---

##### `queueId`<sup>Optional</sup> <a name="queueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#queue_id DataAzurermServicebusQueueAuthorizationRule#queue_id}.

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#queue_name DataAzurermServicebusQueueAuthorizationRule#queue_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#resource_group_name DataAzurermServicebusQueueAuthorizationRule#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusQueueAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#timeouts DataAzurermServicebusQueueAuthorizationRule#timeouts}

---

### DataAzurermServicebusQueueAuthorizationRuleTimeouts <a name="DataAzurermServicebusQueueAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

const dataAzurermServicebusQueueAuthorizationRuleTimeouts: dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/servicebus_queue_authorization_rule#read DataAzurermServicebusQueueAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusQueueAuthorizationRule } from '@cdktf/provider-azurerm'

new dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermServicebusQueueAuthorizationRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueueAuthorizationRule.DataAzurermServicebusQueueAuthorizationRuleTimeouts">DataAzurermServicebusQueueAuthorizationRuleTimeouts</a> | cdktf.IResolvable

---



