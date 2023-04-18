# `data_azurerm_monitor_log_profile`

Refer to the Terraform Registory for docs: [`data_azurerm_monitor_log_profile`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile).

# `dataAzurermMonitorLogProfile` Submodule <a name="`dataAzurermMonitorLogProfile` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorLogProfile <a name="DataAzurermMonitorLogProfile" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile azurerm_monitor_log_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

new dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile(scope: Construct, id: string, config: DataAzurermMonitorLogProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig">DataAzurermMonitorLogProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig">DataAzurermMonitorLogProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorLogProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isConstruct"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList">DataAzurermMonitorLogProfileRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.servicebusRuleId">servicebusRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference">DataAzurermMonitorLogProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: DataAzurermMonitorLogProfileRetentionPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList">DataAzurermMonitorLogProfileRetentionPolicyList</a>

---

##### `servicebusRuleId`<sup>Required</sup> <a name="servicebusRuleId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.servicebusRuleId"></a>

```typescript
public readonly servicebusRuleId: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorLogProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference">DataAzurermMonitorLogProfileTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermMonitorLogProfileTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorLogProfileConfig <a name="DataAzurermMonitorLogProfileConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

const dataAzurermMonitorLogProfileConfig: dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#name DataAzurermMonitorLogProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#id DataAzurermMonitorLogProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#name DataAzurermMonitorLogProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#id DataAzurermMonitorLogProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorLogProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#timeouts DataAzurermMonitorLogProfile#timeouts}

---

### DataAzurermMonitorLogProfileRetentionPolicy <a name="DataAzurermMonitorLogProfileRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicy.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

const dataAzurermMonitorLogProfileRetentionPolicy: dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicy = { ... }
```


### DataAzurermMonitorLogProfileTimeouts <a name="DataAzurermMonitorLogProfileTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

const dataAzurermMonitorLogProfileTimeouts: dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#read DataAzurermMonitorLogProfile#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/monitor_log_profile#read DataAzurermMonitorLogProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorLogProfileRetentionPolicyList <a name="DataAzurermMonitorLogProfileRetentionPolicyList" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

new dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorLogProfileRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorLogProfileRetentionPolicyOutputReference <a name="DataAzurermMonitorLogProfileRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

new dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.days">days</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicy">DataAzurermMonitorLogProfileRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.days"></a>

```typescript
public readonly days: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorLogProfileRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileRetentionPolicy">DataAzurermMonitorLogProfileRetentionPolicy</a>

---


### DataAzurermMonitorLogProfileTimeoutsOutputReference <a name="DataAzurermMonitorLogProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorLogProfile } from '@cdktf/provider-azurerm'

new dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorLogProfileTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorLogProfile.DataAzurermMonitorLogProfileTimeouts">DataAzurermMonitorLogProfileTimeouts</a> | cdktf.IResolvable

---



