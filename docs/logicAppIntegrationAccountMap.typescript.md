# `azurerm_logic_app_integration_account_map`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_integration_account_map`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map).

# `logicAppIntegrationAccountMap` Submodule <a name="`logicAppIntegrationAccountMap` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountMap <a name="LogicAppIntegrationAccountMap" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map azurerm_logic_app_integration_account_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap(scope: Construct, id: string, config: LogicAppIntegrationAccountMapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig">LogicAppIntegrationAccountMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig">LogicAppIntegrationAccountMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppIntegrationAccountMapTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isConstruct"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformElement"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformResource"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference">LogicAppIntegrationAccountMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.integrationAccountNameInput">integrationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.mapTypeInput">mapTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.mapType">mapType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountMapTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference">LogicAppIntegrationAccountMapTimeoutsOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationAccountNameInput`<sup>Optional</sup> <a name="integrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.integrationAccountNameInput"></a>

```typescript
public readonly integrationAccountNameInput: string;
```

- *Type:* string

---

##### `mapTypeInput`<sup>Optional</sup> <a name="mapTypeInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.mapTypeInput"></a>

```typescript
public readonly mapTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LogicAppIntegrationAccountMapTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a> | cdktf.IResolvable

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

---

##### `mapType`<sup>Required</sup> <a name="mapType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.mapType"></a>

```typescript
public readonly mapType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountMapConfig <a name="LogicAppIntegrationAccountMapConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.Initializer"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountMapConfig: logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#content LogicAppIntegrationAccountMap#content}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#integration_account_name LogicAppIntegrationAccountMap#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.mapType">mapType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#map_type LogicAppIntegrationAccountMap#map_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#name LogicAppIntegrationAccountMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#resource_group_name LogicAppIntegrationAccountMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#id LogicAppIntegrationAccountMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#metadata LogicAppIntegrationAccountMap#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#content LogicAppIntegrationAccountMap#content}.

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#integration_account_name LogicAppIntegrationAccountMap#integration_account_name}.

---

##### `mapType`<sup>Required</sup> <a name="mapType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.mapType"></a>

```typescript
public readonly mapType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#map_type LogicAppIntegrationAccountMap#map_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#name LogicAppIntegrationAccountMap#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#resource_group_name LogicAppIntegrationAccountMap#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#id LogicAppIntegrationAccountMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#metadata LogicAppIntegrationAccountMap#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountMapTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#timeouts LogicAppIntegrationAccountMap#timeouts}

---

### LogicAppIntegrationAccountMapTimeouts <a name="LogicAppIntegrationAccountMapTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.Initializer"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountMapTimeouts: logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#create LogicAppIntegrationAccountMap#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#delete LogicAppIntegrationAccountMap#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#read LogicAppIntegrationAccountMap#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#update LogicAppIntegrationAccountMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#create LogicAppIntegrationAccountMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#delete LogicAppIntegrationAccountMap#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#read LogicAppIntegrationAccountMap#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/logic_app_integration_account_map#update LogicAppIntegrationAccountMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountMapTimeoutsOutputReference <a name="LogicAppIntegrationAccountMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppIntegrationAccountMap } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppIntegrationAccountMapTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountMap.LogicAppIntegrationAccountMapTimeouts">LogicAppIntegrationAccountMapTimeouts</a> | cdktf.IResolvable

---



