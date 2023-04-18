# `azurerm_logic_app_trigger_http_request`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_trigger_http_request`](https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request).

# `logicAppTriggerHttpRequest` Submodule <a name="`logicAppTriggerHttpRequest` Submodule" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppTriggerHttpRequest <a name="LogicAppTriggerHttpRequest" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request azurerm_logic_app_trigger_http_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

new logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest(scope: Construct, id: string, config: LogicAppTriggerHttpRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig">LogicAppTriggerHttpRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig">LogicAppTriggerHttpRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetRelativePath">resetRelativePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppTriggerHttpRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetRelativePath` <a name="resetRelativePath" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetRelativePath"></a>

```typescript
public resetRelativePath(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isConstruct"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformElement"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformResource"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.callbackUrl">callbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference">LogicAppTriggerHttpRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.logicAppIdInput">logicAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.relativePathInput">relativePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.logicAppId">logicAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.relativePath">relativePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.callbackUrl"></a>

```typescript
public readonly callbackUrl: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppTriggerHttpRequestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference">LogicAppTriggerHttpRequestTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logicAppIdInput`<sup>Optional</sup> <a name="logicAppIdInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.logicAppIdInput"></a>

```typescript
public readonly logicAppIdInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relativePathInput`<sup>Optional</sup> <a name="relativePathInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.relativePathInput"></a>

```typescript
public readonly relativePathInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LogicAppTriggerHttpRequestTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logicAppId`<sup>Required</sup> <a name="logicAppId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.logicAppId"></a>

```typescript
public readonly logicAppId: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relativePath`<sup>Required</sup> <a name="relativePath" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.relativePath"></a>

```typescript
public readonly relativePath: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppTriggerHttpRequestConfig <a name="LogicAppTriggerHttpRequestConfig" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.Initializer"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

const logicAppTriggerHttpRequestConfig: logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.logicAppId">logicAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#logic_app_id LogicAppTriggerHttpRequest#logic_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#name LogicAppTriggerHttpRequest#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#schema LogicAppTriggerHttpRequest#schema}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#id LogicAppTriggerHttpRequest#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#method LogicAppTriggerHttpRequest#method}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.relativePath">relativePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#relative_path LogicAppTriggerHttpRequest#relative_path}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logicAppId`<sup>Required</sup> <a name="logicAppId" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.logicAppId"></a>

```typescript
public readonly logicAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#logic_app_id LogicAppTriggerHttpRequest#logic_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#name LogicAppTriggerHttpRequest#name}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#schema LogicAppTriggerHttpRequest#schema}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#id LogicAppTriggerHttpRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#method LogicAppTriggerHttpRequest#method}.

---

##### `relativePath`<sup>Optional</sup> <a name="relativePath" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.relativePath"></a>

```typescript
public readonly relativePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#relative_path LogicAppTriggerHttpRequest#relative_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppTriggerHttpRequestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#timeouts LogicAppTriggerHttpRequest#timeouts}

---

### LogicAppTriggerHttpRequestTimeouts <a name="LogicAppTriggerHttpRequestTimeouts" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.Initializer"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

const logicAppTriggerHttpRequestTimeouts: logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#create LogicAppTriggerHttpRequest#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#delete LogicAppTriggerHttpRequest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#read LogicAppTriggerHttpRequest#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#update LogicAppTriggerHttpRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#create LogicAppTriggerHttpRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#delete LogicAppTriggerHttpRequest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#read LogicAppTriggerHttpRequest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request#update LogicAppTriggerHttpRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppTriggerHttpRequestTimeoutsOutputReference <a name="LogicAppTriggerHttpRequestTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppTriggerHttpRequest } from '@cdktf/provider-azurerm'

new logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppTriggerHttpRequestTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppTriggerHttpRequest.LogicAppTriggerHttpRequestTimeouts">LogicAppTriggerHttpRequestTimeouts</a> | cdktf.IResolvable

---



